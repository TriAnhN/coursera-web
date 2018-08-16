document.addEventListener("DOMContentLoaded", function(event) {
    function F1(event) {
        document.getElementById("Title1").textContent = "In so xoan oc";
        result= "";
        var n = window.prompt("Nhap n");
        var v = 0;	 //v - value
        while ( v<Math.pow(n) ) { 
        	for (var i = 0; i<n;i+w){
        		w = 1;
        		j = 0
        		x[i][j] = v;
        	}
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