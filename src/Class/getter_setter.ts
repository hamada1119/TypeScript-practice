class Person {

    constructor(public name:string, public age:number){
    }

    incrementAge(){
        this.age +=1;
    }

    greeting(this: Person ){
        console.log(`Hello! My name is ${this.name}. And I'm ${this.age} years old.`);
    }
}

class Teacher extends Person{
    get subject(){
        if (!this._subject){
            throw new Error('There is no subject. ')
        }
        return 'Music';
    }

    set subject(value){
        if(!this._subject){
            throw new Error('There is no subject. ')
        }
        this._subject = value;
    }

    constructor(name:string, age:number, private _subject: string){
        super(name,age);
    }
    greeting(){
        console.log(`Hello! My name is ${this.name}. And I'm ${this.age} years old. I teach ${this._subject}`);
    };
}

const teacher = new Teacher('Quill', 38,'math');
console.log(teacher.subject)
teacher.subject = 'gjha';
teacher.greeting();