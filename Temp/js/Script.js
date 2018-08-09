document.addEventListener("DOMContentLoaded", function(event) {
    function F1(event) {
        document.getElementById("Title1").textContent = "In so";
        var x = [2];
        var n = window.prompt("Nhap n");
        // for (var i = 0; i < n; i++) {
        //     var y = window.prompt("Nhập gia tri thu " + i + ": ");
        //     x.push(y);
        // }
        // document.getElementById("content1").innerHTML +=
        //     "<br>Before: " + x;
        // Lap danh sach so nguyen to
        for (var i = 3; i < n; i++) {
            var check = true;
            for (var j = 0; j + 1 <= x.length; j++) {
                if (i % x[j] == 0) { check = false; }
            }
            if (check) { x.push(i) };
        }
        var c2 = true;
        while (n) {
            
            if (n % i == 0) {}
        }
        document.getElementById("content1").innerHTML +=
            x;
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