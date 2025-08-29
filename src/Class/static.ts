//staticを使ってインスタンスを作らずにクラスを使う
//Math.random() newを使わずに使えている.イメージはこれと一緒。
class Person {
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
console.log(Person.species)
console.log(Person.isAdult(38))
console.log(Teacher.species)
console.log(Teacher.isAdult(38))
