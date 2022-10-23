 document.getElementById("a").addEventListener("click", myFunction1);

function myFunction1() {
    document.body.style.backgroundColor = "orangered";
    document.getElementById("myImg").src = "image/2.jpg";
}

document.getElementById("b").addEventListener("click", myFunction2);

function myFunction2() {
    document.body.style.backgroundColor = "slategray";
    document.getElementById("myImg").src = "image/3.JPG";
}

document.getElementById("c").addEventListener("click", myFunction3);

function myFunction3() {
    document.body.style.backgroundColor = "coral";
    document.getElementById("myImg").src = "image/4.png";
}

document.getElementById("d").addEventListener("click", myFunction4);

function myFunction4() {
    document.body.style.backgroundColor = "white";
    document.getElementById("myImg").src = "image/1.jpg";
}