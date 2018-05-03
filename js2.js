var item=[1,2,3,4];
item.push(5,6,7,8);
console.log(item);
item.pop();
console.log(item);
console.log(item.length);
function test1() {
    for (var i=0; i<item.length;i++ ) {
        console.log("test 1: "+item[i]);
    }
}
test1();
var i=3;
while (i!==Math.floor(Math.random()*7)) {
    console.log("test while: "+item[i]);
}


