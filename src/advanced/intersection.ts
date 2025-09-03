// type Engineer = {
//     name: string;
//     role: string;
// }

// type Blogger = {
//     name: string;
//     follower: string;
// }

interface Engineer {
    name: string;
    role: string;
}

interface Blogger  {
    name: string;
    follower: number;
}

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger { }

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | boolean;
type Mix = StringNumber | NumberBoolean;