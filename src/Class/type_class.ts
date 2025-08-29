//Personクラスが生成するインスタンスの型より簡単に表す方法
//そのClassが生成する型も同じ名前で生成する.Classは値だけではなくて、そのクラスが生成する型にもなる
//const quill = new Person('Quill'); の Person は、この「値としてのクラス」を指す
//const quill: Person = new Person('Quill'); の : Person は、この「型としてのクラス」を指す。

class Person {
    name: string;

    constructor(initName: string){
        this.name = initName;
    }
    greeting(this: Person ){
        console.log(`Hello! My name is ${this.name}`);
    }
}

const quill = new Person(`Quill`);
quill.greeting()
const anotherQuill = {
    name: 'anotherQuill',
    greeting: quill.greeting
    // anotherGreeting: quill.greeting
}
anotherQuill.greeting();