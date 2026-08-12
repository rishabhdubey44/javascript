// function outer(){
//     var a=5;
//     function inner(){
//         console.log(a);
//     }
//     a=10;
//     return inner;
// }
// x=outer()
// x()

// setTimeout(function(){
//     console.log("Hello")
// },4*1000)

// setTimeout(function(){
//     for(let i=0;i<10;i++){
//         console.log(i);
//     }
// },2000)

// i=1
// function hi(){
//     console.log("setInterval running... ",i);
//     i+=1;
// }
// setInterval(hi,2000)

// setTimeout(function(){
//      for(let i=10;i>=0;i--){
//         console.log(i);
//      }
// },2000)

//# code a countdown starting from 10 to 0
// count=10;
// function countdown(){
//     console.log(count);
//     if(count==0){
//         clearInterval(x);
//     }
//     count--;
// }
// var x=setInterval(countdown,1000);

// setTimeout(function(){
//     clearInterval(x);
// },6000)


// count=0;
// function poll(){
//     console.log("fetched Database at:",new Date().toLocaleTimeString())
//     count+=1;
//     if(count==5){
//         clearInterval(x);
//     }
    
// }
// x=setInterval(poll,2000)

// function poll(){
//     console.log("fetched at:",new Date().toLocaleTimeString())
//     setTimeout(poll,2000)
// }
// setTimeout(poll,2000)

// count=5;
// function startClock(){
//     console.log("time:",new Date().toLocaleTimeString())
//     count--;
//     if(count==0){
//         clearInterval(time);
//     }
// }
// var time= setInterval(startClock,2000)

let count = 10;
let clock;

function countdown() {
    clock = setInterval(() => {
        console.log(count);

        if (count === 0) {
            clearInterval(clock);
            return;
        }

        count--;
    }, 1000);
}

function pause() {
    console.log("Paused at:", count);
    clearInterval(clock);
}

function resume() {
    console.log("Resumed from:", count);

    clock = setInterval(() => {
        console.log(count);

        if (count === 0) {
            clearInterval(clock);
            return;
        }

        count--;
    }, 1000);
}

countdown()
setTimeout(() => {
    pause();
}, 5000);

setTimeout(() => {
    resume();
}, 8000);