let left = document.querySelector("#left");
let middle = document.querySelector("#middle");
let right = document.querySelector("#right");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".fa-check");


left.onclick = function(){
 	if(left.checked){
 		 btn.classList.add("left");
 		 btn.classList.remove("middle");
 		 btn.classList.remove("right");
 		 icon.classList.add("fa-check");
 		 icon.classList.remove("fa-question");
 		 icon.classList.remove("fa-times");

 	}
}

middle.onclick = function(){
 	if(middle.checked){
 		 btn.classList.add("middle");
 		 icon.classList.toggle("fa-question");
 		 icon.classList.remove("fa-times");
 		 icon.classList.remove("fa-check");
 		 btn.classList.remove("left");
 		 btn.classList.remove("right");
 	}
}

right.onclick = function(){
 	if(right.checked){
 		 btn.classList.add("right");
 		 icon.classList.remove("fa-question");
 		 icon.classList.toggle("fa-times");
 		 btn.classList.remove("middle");
 	}
}

