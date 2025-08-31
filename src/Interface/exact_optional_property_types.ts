// ExactOptionalPropertyTypesをTrueにすると、
//オプショナルプロパティが禁止になる
//ただしオプショナルパラメーターは許容される
//今はTrueになっているのでオプショナルプロパティが禁止になっているのでエラーが出る
type Nameable = {
    name: string;
    nickName?: string;
}

let nameableObj: Nameable = {
    name: 'Yoshipi',
    nickName: undefined
}

nameableObj.nickName = undefined
function func(param?: string){}
func(undefined)

