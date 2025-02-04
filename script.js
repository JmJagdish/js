// var n = 2;
// function square (num){
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// var square3 = square(4);

// console.log(square2);
// console.log(square3);




//  var x = 7;

// function getName(){
//     console.log("Namaste JavaScript");
// }
// getName();

// let getName2 =  () =>{
//     console.log("Jagdish"); 
// };


// console.log(x);
// console.log(getName);

// getName2();



// var x = 5;
// a();
// b();
// console.log(x);


// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

// console.log(this.x);


// function a(){
//     const b = 10; 
// }

// console.log(b);

// a();



// var a = 1;
// let b = 2;
// const c = 3;

// function x(){
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

function x(){
    for(let i = 0; i <= 5; i++){
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
x();





