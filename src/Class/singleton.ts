//Singleton pattern
//class値にInstanceを持たせて、コンストラクタをprivateにすることで、
// 外部クラスからのnewを禁止し、唯一性を担保する方法

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


class Teacher extends Person{
    private static instance: Teacher;

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
    //Singleton patternというデザインパターン
    private constructor(name:string, age:number, private _subject: string){
        super(name,age);
    }

    static getInstance() {
        if (Teacher.instance)return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance
    }

}

const teacher1 = Teacher.getInstance()
console.log(teacher1);
teacher1.age = 11;
console.log(teacher1)