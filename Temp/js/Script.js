// 1.array
// var array1=[1,2,3,4]; 
// array1.push(5,6,7,8);
// console.log("1.test push"+array1);
// array1.pop();
// console.log("1.test pop"+array1);
// // 2.function and loop
// function test1() {
//     for (var i=0; i < 10;i++ ) {
//         console.log("2.1 test 1: "+i );
//     }
//     return i;
// }
// console.log('space between us');
// test1();
// console.log("2.2test function: "+test1());
// var i=2;
// var count=0
// while (i !== 3 && count<10) {
//     console.log("test while: "+i);
//     i = Math.floor(Math.random()*3);
//     count=count+1;
// }
// console.log('end');
// function newprofile (name,age) {
//     this.name = name;
//     this.age = age;
//     this.allinfo = name + age;
// };
// nga = new newprofile("nga",40);
// console.log(nga.age);
// console.log(nga.allinfo);
// nga.functionfactory = function () {
//     console.log("newfunction")
// }

// Function constructors
// function Circle (radius) {
//     this.radius = radius;
//     this.getArea1 = 
//         function () {
//             return Math.PI * Math.pow(this.radius,2);
//         };
//   };
//   Circle.prototype.getArea2 = function () {
//     return 2* Math.PI* this.radius;
// };
//   var myCircle = new Circle(10);
//   console.log(myCircle.radius);
//   console.log(myCircle.getArea1());
//   console.log(myCircle.getArea2());
// // Multiply  
//   function makeMultiplier(multiplier) {
//     var myFunc = function (x) {
//       console.log("Multiplier: "+multiplier);
//       return multiplier * x;
//     };
//     return myFunc;
//   };
//   var multiplyBy3 = makeMultiplier(3);

x = window.prompt("Nhập a: ");
function ktsnt(x) {
    var result = true;
    if (x < 2) {
        result = false;
    } else {
        for (i = 2; i <= x - 1; i++) {
            if (x % i == 0) {
                result = false;
                break;
            }
        };
    };
    if (result) { console.log("Khong phai so nguyen to") } else { console.log("So nguyen to") };
};
ktsnt(x);