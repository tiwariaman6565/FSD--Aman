// function display(){
//     alert("enter number")
// }
// display();

// let x =12;
// function display() {
//     console.log("hello world!");
    
// }
// display();
// var x = 14;
// console.log("hello", x);
// display();

// let x = 12;
// let y = "hello world"
// console.log(typeof x , typeof y );

// let obj = {
//     'name'  : 'rahul',
//     'age'   : 25,
//     'city'  : 'delhi',
//     'id' : 12
// }
// let arr=[12,2,3,4,4];
// let a;
// let b=null;
// console.log(typeof b)
function validate(){
    let un=document.getElementById("un").value;
    let pass=document.getElementById("pass").value;
    if(un=="admin" && pass=="admin"){
       document.getElementById("res").innerHTML="Login success";
    } 
    else{
        document.getElementById("res").innerHTML="Invalid username or password";
    }

    
    
}