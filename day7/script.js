// const student=[
//     {name:'Alice',score:50},
//     {name:'Bob',score:60},
//     {name:'Charlie',score:70},
//     {name:'Joe' ,score:80},

// ]
// let newar=student.filter((student)=>student.score>60)
// .map((student)=>student.score*2).reduce((x,y)=>x+y,0);
// console.log(newar);
// sayhello=()=>{
//     console.log("I am in hello function");
// };
// console.log("Task Started");
// setTimeout(sayhello,3000);
//  console.log("Task Ended");
console.log("start");
setTimeout(() => {
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
        setTimeout(()=>{
            console.log("third task completed");
        },3000);
    },2000);
},1000);
console.log("end");
