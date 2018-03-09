let x = document.querySelector(".box");

if(x.attributes[1].value == "red"){
	alert("get it");
}

const stuff = document.querySelector("#cont");
// let box = document.getElementsByTagName("box");

stuff.onclick = function(event){
	let name = event;
	let elem = event;
	console.log(name.target.attributes);
	if(name.target.attributes[1].value == "red"){ // Goood
		let items = document.querySelectorAll("div")
		for(let i = 0; i < items.length; i++){
			if(items[i].hasAttribute("data-red")){
				items[i].classList.toggle("active");
			}
		}
	}
	console.log(elem);
	if(elem.target.attributes[1].value == "redd"){
		alert("lol");
	}
}

// items[i].classList.add("lolist");




































/*
	
	нужно получить кнопку и дивы с цветом и в зависимости от цвета показывать или скрывать див;
	

*/



























































// stuff.onclick = function(event){
// 	let target = event.target;
// 	console.log(target.title);
// 	if(target.title == "Red Button"){
// 		alert("work")
// 	}
// }