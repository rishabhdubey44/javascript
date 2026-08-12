// let arr="HELLO"
// for (const x of arr){
//     console.log(x);
// }
// nums=[1,2,3,4,5]
// nums2=[]
// for(const x of nums){
//     nums2.push(x*x);
// }
// console.log(nums2)

// const users=["alice","bob","charlie"]
// for(const x of users){
//     console.log("Users:"+x);
// }

// const user={
//     name:"Alice",
//     age:25,
//     isAdmin:false
// };
// for(const key in user){
//     console.log(key+":"+user[key])
// }

// const car={
//     brand:"Audi",
//     model:"Q7",
//     year: 2023
// }
// for (const x in car){
//     console.log("x"+":"+car[x])
// }

// const users=["alice","bob","charlie"]
// users.forEach(
//     function(user){
//         console.log(user)
//     }
// )

// const prices=[10,20,30]
// prices.forEach(
//     function(x){
//         console.log("Prices : "+x)
//     }
// )

// const nums=[1,2,3,4,5]
// squares=[]
// nums.forEach(
//     function(y){
//         squares.push(y*y)
//     }
// )
// console.log(squares)

// const arr=[{name:"Alice"},{name:"Bob"},{name:"Charlie"}]
// arr.forEach(
//     function(x){
//         console.log(x.name)
//     }
// )

// const arr=["Blue","Black","Green","Violet"]
// for(const x in arr){
//     if (arr[x]=="Black"){
//         arr[x]="Orange";
//     }
// }
// console.log(arr)

// arr.push("Red")
// console.log(arr)
// console.log(arr.length)
// arr.forEach(
//     function(y){
//         console.log(y)
//     }
// )

// fruits=['Apple','Banana','Plum']
// let removed=fruits.shift()
// console.log("removed ",removed)
// fruits.unshift("watermelon")
// console.log("hi:",fruits)

// console.log(fruits[0])

let messages=["msg1","msg2"]
messages.unshift("urgent");
console.log(messages)
messages.push("msg3")
console.log(messages)
remove=messages.shift();
console.log(remove)
console.log(messages) 