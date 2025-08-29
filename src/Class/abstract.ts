//abstract はインスタンスを生成できない

abstract class Person {
    static species = 'Homo Sapiens'
    static isAdult(age:number){
        if (age > 17) return true;
        return false;
    }

    constructor(public name:string, public age:number){
    }

    incrementAge(){
        this.age +=1;
    }

    greeting(this: Person ){
        console.log(`Hello! My name is ${this.name}. And I'm ${this.age} years old.`);
        this.explainJob();
    }
    abstract explainJob(): void
}

//const teacher1 = new Person(); //abstractを使っているので無理。

class Teacher extends Person{
    explainJob(){
        console.log(`I teach ${this.subject}`)
    }

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
}

const teacher = new Teacher('Quill',38, 'Math')
teacher.greeting()