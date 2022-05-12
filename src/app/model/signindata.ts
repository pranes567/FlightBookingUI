export class signindata{
    private UserName:string;
    private password:string;

    /**
     *
     */
    constructor(email:string,password:string) {
          this.UserName = email;
          this.password = password;     

    }

    getEmail():string{
        return this.UserName;
    }    

    getPassword():string{
        return this.password;
    }
}