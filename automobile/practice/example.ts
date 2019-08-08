let a = 'hello';
let b:string= '10';
console.log(b)


// ___________*******_____________
function q(_msg:any):string{
    return  `hey ${_msg}`;
}
const str:string=q('Anuj');
const sstr=q(10);
console.log(str)
console.log(sstr)

// ___________*******_____________

const  sum= (_i:number ,_j:number):string=>{
    return   `${_i+_j}`
}
console.log(sum(9,8));

// ___________*******_____________

let users:string[]=Array(2);
users[0]="walter";
users[1]="jessie";
users[2]="anuj";
users[3]='ambikesh'

console.log('string[] are: ')
users.forEach(u=>{
    console.log(`name=> ${u}`)
});
// ___________*******_____________

let _uu:any[]=[
    "hello",
    {
       id:1,
       name:"anuj",
       email: 'anuj60@gg.com'
    },
    145, true
]
_uu.forEach(u=>{
    console.log(`array objects are ${JSON.stringify(u)}`);
})
// ___________*******_____________

interface Employee{
    id:number,
    name:string|number,
    address?:any
}

let anuj:Employee={
    id:1,
    name:'anuj',
    address:'zolo acropolis'
};
console.log(anuj)


let ambi:Employee={
    id:2,
    name:76,
    address:86
};
console.log(ambi)
