//classの本質とはconstructor関数の糖衣構文
//デコレーターはclassの定義時に実行される

function Logging(target: Function){
    console.log('Logging....')
    console.log(target)
}

@Logging
class User{
    name='Quill';
    constructor(){
        console.log('User was created')
    }
}

const user1 = new User();
