// type Nameable  = {
//     name: string;
// }

// type Human = {
//     name: number;
//     age: number;
//     greeting(message: string): void;
// } & Nameable


interface Nameable  {
    name: string;
}

interface Human extends Nameable {
    age: number;
    greeting(message: string): void;
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

const user: Human = tmpDeveloper;
let developer = new Developer('Saikyo', 38, 3)
developer.name = 'Lee'
