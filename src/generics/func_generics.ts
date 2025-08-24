// function copy1 (value: any) {
//     return value;
// }
// ジェネリクスを使わないと以下のような書き方になる。（型をいちいちしているする必要がある）
//またいかはObjectでの書き方
// console.log(copy1({name: 'Quill'}) as {name: string})

//TはTypeのT。Tの代わりにgjgajoとかなんでもいい。

function copy1<T extends { name:string },U extends keyof T>(value: T, key: U):T{
    value[key];
    return value;
}
// type K = keyof { name: string; age: number }
console.log(copy1({name: 'Quill',age: 38}, 'age'));


const copy2 = <T extends { name: string }, U extends keyof T>(value: T, key: U): T => {
    value[key]; 
    return value;
};
