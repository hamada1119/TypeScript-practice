//privateは継承先でもアクセスができない
//しかしpublicにはしたくない。その時に使用できるのはprotected
class Person {

    constructor(public name:string, protected age:number){
    }

    incrementAge(){
        this.age +=1;
    }

    greeting(this: Person ){
        console.log(`Hello! My name is ${this.name}. And I'm ${this.age} years old.`);
    }
}

class Teacher extends Person{
    constructor(name:string, age:number, subject: string){
        super(name,age);   
    }
}


const quill = new Person('Quill', 38);
quill.greeting()
quill.incrementAge();
//quill.age=38 ageがprivateなのでエラー出る
// console.log(quill.age)
quill.greeting();