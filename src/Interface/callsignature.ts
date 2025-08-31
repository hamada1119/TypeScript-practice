//　関数の型をなぜオブジェクトのように記述できるのだろうか？
//  それはJavaScriptは関数自体がオブジェクトだから
//　このオブジェクトを関数として扱えるようにする書き方をコールシグネチャという。
// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
    (num1: number, num2: number): number;
}


let addFunc: addFunc;
addFunc = (n1: number, n2: number) =>{
    return n1 + n2;
}


