interface Todo{
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('hello');
    },3000)
})
fetchData.then(data=>{
    data.toUpperCase();
})

const vegetables1: string[] = ['Tomato', 'Broccoli', 'Asparagus'] 
const vegetables2: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'] 