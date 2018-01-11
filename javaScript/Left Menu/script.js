let menu = document.querySelector(".hideMenu");
let btn = document.querySelector(".btn");
let showText = document.querySelector(".items");
let text = document.querySelector(".text");
let icon = document.querySelector(".fa-arrow-right")

btn.onclick = function(){
	menu.classList.toggle("left");
}

showText.onclick = function(){
	text.classList.toggle("show");
	icon.classList.toggle("fa-arrow-down");
}