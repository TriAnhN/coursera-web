// x = window.prompt("Nhập x: ");
// y = window.prompt("Nhap y: ");
function F1() {
    console.log(this);
    var oldmember = ["a", "b", "c", "d", "e", "f", "g"];
    var b = document.getElementById("username").value;
    var memcheck = false;
    var message = "<b>Hello " + b + "</b>";
    if (b == "") {
        console.log("blank check");
        document.getElementById("content").innerHTML = "Please input Username";
    } else {
        for (var i = 0; i < oldmember.length; i++) {
            if (b == oldmember[i]) {
                memcheck = true;
                break;
            }
        }
        if (memcheck == true) {
            message += "</br>This username has been used, Please try again";
        } else {
            message += "</br>Welcome to our website";
        }
        document.getElementById("content").innerHTML = message;
    }

} // end funtion 1

function F2() {
console.log("F2")
} // end funtion 2s

document.querySelector("#button")
    .addEventListener("click", F1);
document.querySelector("button")
.addEventListener("click", F2);

