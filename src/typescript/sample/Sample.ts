/**
 * 一个简单的typescript 类. 通过export关键字, 暴露.
 */
export class Greeter{

    greeting : string;
    constructor(message : string){
        this.greeting = message;
    }

    greet(){
        return "Hello, " + this.greeting;
    }
}

 