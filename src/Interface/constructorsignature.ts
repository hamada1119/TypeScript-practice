//newを書くとコンストラクタ関数として扱われる

interface addFunc {
    new(num1: number, num2: number): number;
    foo: string;
}
function tmp(func: addFunc){
    let data = new func(1,2)
}