interface Human  {
    name: string;
    age: number;
    greeting(message: string): void;
    // greeting: (message: string) => void;
}

const human: Human = {
    name: 'Quill',
    age: 38,
    greeting: function (message: string){
        console.log('Good Morning')
    }
}