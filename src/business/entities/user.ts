export class User  {
    constructor(
        private id:string,
        private name: string,
        private email: string,
        private password: string,
        private photo: string,
    ){}

    getId():string{
        return this.id
    }

    getName(): string{
        return this.name
    }

    getEmail(): string{
        return this.email
    }

    getPassword(): string{
        return this.password
    }

    getPhoto(): string{
        return this.photo
    }

}