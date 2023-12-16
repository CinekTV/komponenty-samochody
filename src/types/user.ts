export class User{
    protected id: number = 0;
    protected firstName: string = '';
    protected lastName: string = '';
    protected password: string = '';
    protected birthDate: Date = new Date();
    protected email: string = '';
    protected address: string = '';
    protected phone: number = 0;
    protected status: number = 0;
    protected isWorker: boolean = false;


public get Id(): number {
    return this.id;
}
public get FirstName(): string {
    return this.firstName;
}
public get LastName(): string {
    return this.lastName;
}
public get Password(): string {
    return this.password;
}

public get BirthDate(): Date {
    return this.birthDate;
}

public get Email(): string {
    return this.email;
}

public get Address(): string {
    return this.address;
}

public get Phone(): number {
    return this.phone;
}

public get Status(): number {
    return this.status;
}

public get IsWorker(): boolean {
    return this.isWorker;
}

constructor (id: number, firstName: string, lastName: string, password: string, birthDate: Date, email: string, address: string, phone: number, status: int, isWorker: boolean)
{
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.birthDate = birthDate;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.status = status;
    this.isWorker = isWorker;
}

}



export class Client extends User{
    private licenseNumber: string = '';
    private creditCardNumber: string = '';    
}
