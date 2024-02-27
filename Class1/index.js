// // console.log("Hello world!");
// // const fs=require("fs")
// // fs.writeFileSync("text.txt", "Hello world!");
// // fs.writeFileSync("text.html", "Hello world!");
// // function obj(){
// //    this.a=5,
// //     this.b=6
// // }
// // obj.prototype.add= function(){
// //     return this.a+this.b;
// // }
// // var newObj=new obj()
// // console.log(newObj.add())

// // var student={
// //     name:"vishal"

// // }
// // student.age="25"
// // student["hobbies"]=[10,20]
// // student.add=function (){
// //     return this.hobbies.reduce((a,b)=>{
// //         return a+b

// //     },0)
// // }
// // console.log(student.add())
// // var [...student]=student.hobbies
// // console.log(a,b)

// // var obj={
// //     name:"vishal",
// //     age:25,
// //     mark:[30,40,50],
// //     address:{
// //         street:"saguna more",
// //         city:"danapur",
// //         state:"bihar"
// //     }
// // }
// // var obj2={...obj,cuts:"cuts"}
// // console.log(obj2)
// // var {name,age,address:{street,city,state},mark:[a,b,c]}=obj
//  class Studen{
//     constructor(name,age,address,mark){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//         this.mark=mark;

//     }
//  }
//  class Teacer extends Studen{
//     constructor(name,age,address,mark,phone,task){
//         super(name,age,address,mark)
//         this.phone = phone
//         this.task = task

//     }
//  }

//  var ravi=new Studen("ravi",23,"saguna",40)
//  console.log(ravi)

//  var sum=(...arg)=>{
//     console.log(arg)

//  }
//  sum(1,2,3,4,5,6,7,8)
// let fetchData=(cb)=>{
//     setTimeout(()=>{
//         cb("done")

//     },2000)
// }

// setTimeout(()=>{
//     fetchData((item)=>{
//         console.log(item)
//     })

// },3000)
// console.log("1")
// // console.log(sum.then((res)=>console.log(res)))
// console.log("12")

// let fetchData=()=>{
     
//     return new Promise((res,rej)=>{
//         var data=false
//         setTimeout(()=>{
//             data=true;

//         },3000)
//         if(data){
//             res(data)
//         }
//     })
// }
// setTimeout(()=>{
//     fetchData().then(res=>console.log(res))

// },2000)
// let a=false
// var data=setTimeout(()=>{
//     a=true;
//     return a
// },3000)
// console.log(data)
// var a=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
// var b=a.map((item)=>{
//     if(item==" "){
//         return "Empty string"
//     }
//     else{
//         return item
//     }

// })
// console.log(b)
// const ary=[1,2]
// var ar=[...ary]
// console.log(ary==[...ary])
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)
// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');
async function print(){
    console.log("a")
    console.log("b")
    await new Promise((res,rej)=>setTimeout(()=>{
        console.log("c")

    },3000))
    
    await new Promise((res,rej)=>setTimeout(res,0))
    console.log("d")
    console.log("e")
}
print()


