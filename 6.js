// const obj={
//     name:"Sara",

//     "Regular" :function(){
//         console.log("This is "+this.name)
//     },
//     "Hi": function(){
//         console.log("Hello, I am "+this.name)
//     }
// }
// obj.Regular();
// obj.Hi();

// const fact=function f(n){
//     if(n<=1) return 1;
//     return n*f(n-1);
// }
// console.log(fact(4))
// console.log(typeof f)

// (function(){
//     var secret="hidden";
//     console.log("Inside IIFE:",secret)
// })()
// console.log(typeof secret)

// function add(a,b,...rest){
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }
// add(10,20,30,40,50)

// function sum(...rest){
//     let sum=0
//     for(let num of rest){
//         sum+= num;
//     }
//     console.log(sum)
// }
// sum(10,20,30,40)

// function makesentence(prefix, ...words){
//     console.log("prefix ",prefix)
//     console.log("words: ",words)

//     return prefix+" "+words.join(" ")
// }
// console.log(makesentence("Hello","my","name","is","naman"))

// const input="   hello world  "
// console.log(input.trim());
// console.log(input.trimStart())
// console.log(input.trimEnd())



// const str=  "JavaScript"
// console.log(str.slice(0,4))
// console.log(str.slice(-6))

// const sentence="I love javascript";
// console.log(sentence.split(" "))
// console.log('a,b,c'.split(","))
// console.log("hello".split(""))

// const text="I like cats. Cats are great."
// console.log(text.replace("cats","dogs"))
// console.log(text.replaceAll("Cats","Dogs"))

// const str="banana";
// console.log(str.indexOf("a"))
// console.log(str.lastIndexOf("a"))
// console.log(str.indexOf("z"))

// const num="7";
// console.log(num.padStart(3,"0"))
// console.log(num.padEnd(7,"0"))

// console.log("ab".repeat(3))

// function hoist(){
//     let message=undefined
//     console.log(message)
//     message="Hi"
// }
// hoist()


// console.log(x)
// var x=5;
// console.log(x)

let a;
console.log(a)
a=10
console.log(a) 
 