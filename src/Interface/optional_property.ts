interface Human  {
    name: string;
    age: number;
    greeting(message: string): void;
    // greeting: (message: string) => void;
}

type Nameable = {
    name: string;
    nickName?: string;
}

const nameable: Nameable ={
    name: 'Taro'
}


class Developer implements Human{
    constructor(public name:string, public age: number, public experience: number){}
    greeting(message: string){
        console.log('Hello');
    }
}

const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string){
        console.log('Hello!!!')
    }
}

const user2: Human = new Developer('Quill', 38, 3)
//const user: Human = tmpDeveloper