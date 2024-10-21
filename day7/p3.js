function fetchdata(){
    return new Promise((resolve,reject)=>{
        // let data={id:1,name:"Abhishek",city:"GZB"}
        const student=[
                {name:'Alice',score:50},
                {name:'Bob',score:60},
                {name:'Charlie',score:70},
                {name:'Joe' ,score:80},
            
            ]
        setTimeout(()=>{
            resolve(student);
        },3000);
    });
}
fetchdata().then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});