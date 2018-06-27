"use strict";

var img = document.querySelector(".wrap > img"),
    buttons = document.querySelectorAll(".slider button"),
    imgSrc = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];

img.src = "img/0.jpg";

setInterval(function () {
	var rand = mtRandom(0, imgSrc.length);
}, 1500);

function mtRandom(min, max) {
	img.src = "img/" + [Math.floor(Math.random() * (max - min))] + ".jpg";
}