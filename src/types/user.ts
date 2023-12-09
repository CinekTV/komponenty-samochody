export class User{
    private id: number = 0;
    private firstName: string = '';
    private lastName: string = '';
    private birthDate: Date = new Date();
    private email: string = '';
    private address: string = '';
    private phone: number = 0;
    private status: number = 0;
    private isWorker: boolean = false;
}

export class Client extends User{
    private licenseNumber: string = '';
    private creditCardNumber: string = '';    
}
