//var colorGreen = document.getElementById(colorGreen)
//var colorRed = document.getElementById(colorRed)
//myFunction.onclick = function() {
//	colorRed.style.visibility = "visible";
//	colorGreen.style.visibility = "visible";
//}

document.getElementById("buttongr").style.visibility="hidden"
document.getElementById("buttonws").style.visibility="hidden"
document.getElementById("summerphoto").style.display="none"
document.getElementById("winterphoto").style.display="none"
document.getElementById("yee").style.display="none"
document.getElementById("naa").style.display="none"

function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("nameresponse").innerHTML =
        "Hi " + person + "! Do you like red or green more?";
        document.getElementById("buttongr").style.visibility="visible";

    }
}

var sznImage = document.querySelector(".fade")
sznImage.addEventListener("click", showpopup)

function colorRed() {
	document.body.style.background = "green";
	document.getElementById("buttonws").style.visibility="visible"
}

function colorGreen() {
	document.body.style.background = "red";
	document.getElementById("buttonws").style.visibility="visible"
}

function summer() {
	document.getElementById("summerphoto").style.display="block"
}

function winter() {
	document.getElementById("winterphoto").style.display="block"
}

function yes() {
	document.getElementById("yee").style.display="block"
}

function no() {
	document.getElementById("naa").style.display="block"
}

function showpopup() {
	alert("hahaha")
}