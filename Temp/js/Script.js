document.addEventListener("DOMContentLoaded", function (event) {
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

// x = window.prompt("Nhập x: ");
// y = window.prompt("Nhap y: ");