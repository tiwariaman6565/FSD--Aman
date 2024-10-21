const myPromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Data Send Successfu");
    }else{
        reject("Data Send Failed");
    }
});
myPromise
.then((data)=>{
    console.log("Data Recieved"+message);
})
.catch((error)=>{
    console.log("Failded to fetch data"+error);
});
