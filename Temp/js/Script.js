/*document.addEventListener("DOMContentLoaded", function (event) {
    function F1(event) {
        document.getElementById("Title1").textContent = "Mua dien thoai";
        result = "";
        var bank = window.prompt("Nhap so tien trong tk");
        var price = window.prompt("Nhap so tien mot chiec dien thoai");
        var acc = window.prompt("Nhap so tien mot phu kien dien thoai");
        var taxrate = window.prompt("% thue");

        function tax(y, r) {
            return y * (1 + r)
        }

        function chkprice(x, y, z, r) {
            if (tax((y + z), r) <= x) {
                console.log("Mua dien thoai + pk")
            } else if (tax((y), r) <= x) {
                console.log("Mua dien thoai")
            } else {
                console.log("Trong tai khoan hien co: " + x + " khong du tien mua dien thoai")
                break;
            }
        }
        while (x > 0) {
            chkprice(bank, price, acc, taxrate)

        }
        document.getElementById("content1").innerHTML = "Result: " + result;
    } // end funtion 1

    function F2(event) {
        console.log("F2")
    } // end funtion 2s

    document.querySelector("#button1")
        .addEventListener("click", F1);
    document.querySelector("#button2")
        .addEventListener("click", F2);


});
*/
// x = window.prompt("Nhập x: ");
// y = window.prompt("Nhap y: ");

/* function giveEms(px) {
    var baseValue= 16;
    return function dothemath(y) {
        return px/baseValue*y;
    }
}
console.log(giveEms(30)(10));
console.log(giveEms(20)(100));
console.log(giveEms(30)(100));

function abc(x) {
    var a = x/2;
    function cde() {
        return a/5
    }
    return cde();
}
console.log(abc(20));

var counter = (function () {
    var privatecounter = 0;
    function changeby(val) {
        privatecounter+=val;
    }
    return {
        increment : function (){
            changeby(1);
        },
        decrement :function () {
            changeby(-1);
        },
        value: function () {
            return privatecounter;
        }
    };
})();
console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() {
      console.log(num);
    }
    num++;
  
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2 */





  var request = new XMLHttpRequest();
  request.open("GET", "route.json", false);
  request.send(null)
  var my_JSON_object = JSON.parse(request.responseText);
  console.log(my_JSON_object.result[0]);