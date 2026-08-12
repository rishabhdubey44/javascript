//const arr=[10,20,30,40,50]
//arr2=[]
// for(let i=0;i<arr.length;i++){
//     arr2.push(arr[i]*2)
// }
// console.log(arr2);

//map
// x=arr.map(function(num){
//     return num*2;
// })
// console.log(x);

// //using arrow function syntax
// let res= arr.map((num)=>num*2)
// console.log(res)

// const basket=["mango","cherry","plum","orange","kiwi"]
// let ans= basket.map(
//     function(num){
//         return "fruits:"+num;
//     }
// )
// console.log(ans)

//const arr=[20,45,12,6,85]

// let res=arr.filter(function(num){
//     if(num>50){
//         return num;
//     }
// })
// console.log(res)

// let res=arr.filter((num)=>{
//    if(num>50) return num
//  })
// console.log(res)

// const arr=[20,45,12,6,85,56,72]

// let res=arr.filter((x)=>x%2==0)
// console.log(res)

// const basket=["mango","cherry","plum","orange","kiwi","watermelon","pineapple"]

// let res= basket.filter(
//     function(num){
//         if(num.length>5){
//             return num;
//         }
//     }
// )
// console.log(res)

const students=[
    {name:'John James',status:true},
    {name:'Micheal Obi',status:false},
    {name:'Bola Abe',status:true},
    {name:'Emmanuel',status:false},
    {name:'Faithfulness Alamu',status:true},
];

// result=[]
// for(let i=0;i<students.length;i++){
//     if(students[i].status==true){
//         result.push(students[i].name);
//     }
// }
// console.log(result)

// let res=students.filter(s=> s.status==true)
// console.log(res)
// ans=res.map(list=>list.name)
// console.log(ans)

let res= students.filter(s=>s.status==true)
            .map(list=>list.name)

console.log(res)