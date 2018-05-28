// 1.array
var array1=[1,2,3,4]; 
array1.push(5,6,7,8);
console.log("1.test push"+array1);
array1.pop();
console.log("1.test pop"+array1);
// 2.function and loop
function test1() {
    for (var i=0; i < 10;i++ ) {
        console.log("2.1 test 1: "+i );
    }
    return i;
}
console.log('space between us');
test1();
console.log("2.2test function: "+test1());
var i=2;
var count=0
while (i !== 3 && count<10) {
    console.log("test while: "+i);
    i = Math.floor(Math.random()*3);
    count=count+1;
}
console.log('end');