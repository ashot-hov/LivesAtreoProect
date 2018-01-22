var colors = document.getElementsByClassName("all");
var settings = document.getElementById("out");
var menu = document.getElementById("menu");
var one = document.getElementById("one");
var second = document.getElementById("second");
var three = document.getElementById("three");
var four = document.getElementById("four");

settings.onmouseover = function(){
	menu.style.left = "20px";
 	menu.style.transition = "0.3s ease-in";
}

settings.onclick = function(){
	menu.style.left = "-110px";
 	menu.style.transition = "0.3s ease-in";	
}

one.onclick = function(){
	document.body.style.background = "#8E4661";
 	document.body.style.transition = "0.5s ease-in";
}

second.onclick = function(){
	document.body.style.background = "#51628E";
 	document.body.style.transition = "0.5s ease-in";
}

three.onclick = function(){
	document.body.style.background = "#5FB23B";
 	document.body.style.transition = "0.5s ease-in";
}

four.onclick = function(){
	document.body.style.background = "#B23135";
 	document.body.style.transition = "0.5s ease-in";
}
