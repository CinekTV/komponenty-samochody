export class User{
    private id: number = 0;
    private firstName: string = '';
    private lastName: string = '';
    private password: string ='';
    private birthDate: Date = new Date();
    private email: string = '';
    private address: string = '';
    private phone: number = 0;
    private status: number = 0;
    private isWorker: boolean = false;

    getEmail(): string {
      return this.email;
    }
  
  getPhone(): number {
      return this.phone;
    }
  getFirstName(): string {
      return this.firstName;
    }
  getLastName(): string {
      return this.lastName;
    }

  getPassword(): string {
      return this.password;
  }

  getId(): number {
      return this.id;
  }

  setEmail(email: string): void {
      this.email = email;
    }
  
  setPhone(phone: number): void {
      this.phone = phone;
    }

  setFirstName(firstName: string): void {
      this.firstName = firstName;
    }
  
  setLastName(lastName: string): void {
      this.lastName = lastName;
    }

  setPassword(password: string): void {
      this.password = password;
    }

  setId(id: number): void {
      this.id = id;
    }
    getBirthDate(): Date {
      return this.birthDate;
  }

  setBirthDate(birthDate: Date): void {
      this.birthDate = birthDate;
  }

  getAddress(): string {
      return this.address;
  }

  setAddress(address: string): void {
      this.address = address;
  }

  getStatus(): number {
      return this.status;
  }

  setStatus(status: number): void {
      this.status = status;
  }

  getIsWorker(): boolean {
      return this.isWorker;
  }

  setIsWorker(isWorker: boolean): void {
      this.isWorker = isWorker;
  }
}

export class Client extends User{
  private licenseNumber: string = '';
  private creditCardNumber: string = '';    
}