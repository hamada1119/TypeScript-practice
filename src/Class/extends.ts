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
    constructor(name:string, age:number){
        super(name,age);
        super.greeting()//継承元のメソッドを使いたい場合の処理   
    }
}

const teacher = new Teacher('Quill', 38);
teacher.greeting();