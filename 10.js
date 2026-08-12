// nums=[10,20,30,40,50]
// sum=0;
// for(let i=0;i<nums.length;i++){
//     sum+=nums[i];
// }
// console.log(sum)

// //using reduce
// let total=nums.reduce((sum,currVal)=>{
//     return sum+currVal
// },0)

// console.log(total)


// const nums=[10,29,12,58,90,93,32,44]
// max=0s
// for(let i=0;i<nums.length;i++){
//     if(nums[i]>max){
//         max=nums[i]
//     }
// }
// console.log(max)

//using reduce find max

// const nums=[10,29,12,58,90,93,32,44]
// let res=nums.reduce((max,value)=>{
//     if(value>max){
//         return value;
//     }
//     return max;
// },nums[0])
// console.log(res)


// const numbers=[1,2,3,4,5,6,7,8,9,10]
// let rees= numbers.filter((num)=>num%2==1)
//             .map(nums=>nums*2);
// console.log(rees)

// const numbers=[1,2,3,4,5,6,7,8,9,10]
// let ans= numbers
//                 .filter((num)=>num%2==0)
//                 .map((nums)=>nums**2)
//                 .reduce((sum,val)=>sum+val,0)
// console.log(ans)

// const students=[
//     {name:"Isha",marks:{math:85,English:90}},
//     {name:"Rohan",marks:{math:60,English:70}},
//     {name:"Devika",marks:{math:80,English:75}},
//     {name:"Kabir",marks:{math:95,English:98}},
// ]
// let res=students.filter((list)=>list.marks.math>80).map(list=>list.name)
// console.log(res)

// let p= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("After 3 sec")
//         resolve("promise resolved")
//     })
// },3000)
// console.log("p:",p)

// p.then((res)=>{
//     console.log("p:",p)
//     console.log(res)
// })
// .catch((err)=>{
//     console.log("error:",err)
// })

function asynOperation(resolve,reject){
    setTimeout(()=>{
        console.log("fetched Data")
        resolve("resolved promise")
    },4000)
}
let p2=new Promise(asynOperation)

function callBack(res){
    console.log("callback ran")
    console.log(res)
}
p2.then(callBack).catch((err)=>console.log("error"))
