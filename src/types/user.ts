export class User{
    private id: number = 0;
    private firstName: string = '';
    private lastName: string = '';
    private password: string ='';
    private birthDate: Date = new Date();
    private email: string = '';
    private address: string = '';
    private phone: string = '';
    private status: number = 0;
    private isWorker: boolean = false;

  getEmail(): string {
      return this.email;
    }

  setEmail(email: string): void {
      this.email = email;
    }
  
  getPhone(): string {
      return this.phone;
    }

  setPhone(phone: string): void {
      this.phone = phone;
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