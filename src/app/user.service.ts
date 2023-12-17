import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Client, Worker } from '../types/user';  // Importujemy wszystkie klasy z pliku user.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrlClients = 'http://localhost:3000/clients';
  private apiUrlWorkers = 'http://localhost:3000/workers';

  private loggedUserLocalStorageKey = 'logged';
  private isWorkerLocalStorageKey = 'isWorker';

  constructor(private httpClient: HttpClient) {}

  doesEmailExist(email: string): Observable<boolean> {
    const clientsEmails = this.httpClient.get<User[]>(`${this.apiUrlClients}`).pipe(
      map(clients => clients.map(client => client.Email))
    );

    const workersEmails = this.httpClient.get<Worker[]>(`${this.apiUrlWorkers}`).pipe(
      map(workers => workers.map(worker => worker.Email))
    );

    return forkJoin([clientsEmails, workersEmails]).pipe(
      map(([clientsEmails, workersEmails]) => {
        const allEmails = [...clientsEmails, ...workersEmails];
        return allEmails.includes(email);
      })
    );
  }

  isWorker(): boolean {
    const isWorkerJSON = localStorage.getItem(this.isWorkerLocalStorageKey);
    return isWorkerJSON ? JSON.parse(isWorkerJSON) === true : false;
  }

  addLoggedUser(userId: number, isWorker: boolean) {
    localStorage.setItem(this.isWorkerLocalStorageKey, JSON.stringify(isWorker));
    localStorage.setItem(this.loggedUserLocalStorageKey, JSON.stringify(userId));
  }

  getLoggedUserId(): number {
    const userIdJSON = localStorage.getItem(this.loggedUserLocalStorageKey);
    return userIdJSON ? parseInt(userIdJSON) : -1;
  }

  getUser(email: string, password: string): Observable<User | undefined> {
    localStorage.clear();

    const client$ = this.httpClient.get<Client[]>(`${this.apiUrlClients}`).pipe(
      map(clients => clients.find(client => client.Email === email && client.Password === password))
    );

    const worker$ = this.httpClient.get<Worker[]>(`${this.apiUrlWorkers}`).pipe(
      map(workers => workers.find(worker => worker.Email === email && worker.Password === password))
    );

    return forkJoin([client$, worker$]).pipe(
      map(([foundClient, foundWorker]) => {
        if (foundClient) {
          (foundClient as Client).IsWorker == false; // Domyślnie ustawiamy na false dla klienta
          return foundClient;
        } else if (foundWorker) {
          (foundWorker as Worker).IsWorker == true; // Ustawiamy na true dla pracownika
          return foundWorker;
        } else {
          return undefined;
        }
      })
    );
  }

  addClient(client: Client): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.httpClient.post(`${this.apiUrlClients}`, client, httpOptions).subscribe();
  }

  addWorker(worker: Worker): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.httpClient.post(`${this.apiUrlWorkers}`, worker, httpOptions).subscribe();
  }
}
