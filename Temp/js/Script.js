document.addEventListener("DOMContentLoaded", function(event) {
    function F1(event) {
        document.getElementById("Title1").textContent = "Sap xep so";
        var x = [];
        var n= window.prompt("Nhap n");
        for (var i = 0; i<n ; i++) {
           var y = window.prompt("Nhập gia tri thu "+i+": "); 
           x.push(y);
        }
        var before=x;
        document.getElementById("content1").innerHTML +=
            "<br>Before: "+ before;
        //Sap xep
        for (var i = 1; i+1<=x.length; i++) {
            var temp = x[i];
            var j=i-1;
            while (j>=0 && temp > x[j]) {
                x[j+1] = x[j];
                x[j] = temp;
                j--;
            }
        }
        document.getElementById("content1").innerHTML +=
            "<br>"+ "After: " + x        ;
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