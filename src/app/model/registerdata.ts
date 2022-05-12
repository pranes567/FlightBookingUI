export class regiserterdata{
    private name:string;
    private userName:string;
    private passWord:string;

    constructor(name:string,email:string,password:string) {
        this.name = name;
        this.userName = email;
        this.passWord = password;     

  }

  getEmail():string{
      return this.userName;
  }    

  getPassword():string{
      return this.passWord;
  }

}