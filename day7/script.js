const student=[
    {name:'Alice',score:50},
    {name:'Bob',score:60},
    {name:'Charlie',score:70},
    {name:'Joe' ,score:80},

]
let newar=student.filter((student)=>student.score>60)
.map((student)=>student.score*2).reduce((x,y)=>x+y,0);
console.log(newar);