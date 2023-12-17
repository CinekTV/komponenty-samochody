import { Injectable } from '@angular/core';
import { User, Client } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  constructor() {
    const user1 = new User();
    user1.setId(1);
    user1.setFirstName('Jan');
    user1.setLastName('Don');
    user1.setEmail('jan.don@gmail.com');
    user1.setPassword('lol123');
    user1.setPhone(123456789);

    const user2 = new User();
    user2.setId(2);
    user2.setFirstName('Jane');
    user2.setLastName('Don');
    user2.setEmail('jane.don@gmail.com');
    user1.setPassword('lol12345');
    user2.setPhone(987654321);

    this.users = [user1, user2];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(newUser: User): void {
    newUser.setId(this.users.length + 1);
    this.users.push(newUser);
  }
}