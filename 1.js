/*console.log("hello world");

let name="Ram";
name="Rishabh"
console.log(name);

let age=24;
console.log(age);

const age1=24;
console.log(age1);

var x="Hi";
x="Rishabh"
console.log(name); 
console.log(typeof(location))

let canvote=true;
console.log(typeof(canVote));
console.log(canvote) */

/*const Student={
    name:"Virat Kohli",
    age:37,
    Century:85,
    Salary: 20000000.00
}
console.log(Student)
console.log(typeof(Student))
console.log(Student.age)


let arr=[10,20,30,40,50];
console.log(arr);
console.log(typeof(arr))
console.log(arr[1])*/

/*function greeting(name){
    console.log("hello "+name)
}
greeting("Great")

function add(a,b){
    return a+b;
}
console.log(add(4,-1))

function check(num){
    if (num%2==0){
        console.log("Even")
    }else{
        console.log("odd")
    }
}
check(4)

//recursive function to print 1 to n
function print(n){
    if (n==0){
        return;
    }
    print(n-1);
    console.log(n);
}
print(10)*/

function canVote(age){
    if(age>=18){
        console.log("baalik");
    }
    else{
        console.log("Nabaalik");
    }
}
canVote(18);