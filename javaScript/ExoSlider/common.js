// const img = document.querySelector(".wrap > img"),
// 	  buttons = document.querySelectorAll("button"),
// 	  imgSrc = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];


// ========================================================= Rnadom

// setInterval(()=>{
// 	let rand = mtRandom(0, imgSrc.length);
// }, 1000)


// function mtRandom(min, max){
// 	img.src = "img/" + [Math.floor(Math.random() * (max - min))] + ".jpg";
// }

// img.src = "img/0.jpg";



// ========================================================== Click
// (function(){
// 	for(let i = 0; i < buttons.length; i++){
// 	let lol = 0,
// 		lolo = 5;
// 	buttons[i].addEventListener("click", function(){
// 		if(buttons[i].className === "next"){
// 			lol++;
// 			if(lol >= 0){
// 				console.log(lol);
// 				img.src = "img/" + lol + ".jpg";
// 				if(lol >= 4){
// 					lol = 0;
// 				}
// 			}
// 		}
// 	})

// 	buttons[i].addEventListener("click", function(){
// 		if(buttons[i].className === "prev"){
// 			lolo--;
// 			img.src = "img/" + lolo + ".jpg";
// 			if(lolo <= 0){
// 				lolo = 4;
// 			}
// 			console.log(lolo);
// 		}
// 	})
// }
// })();

// ============================================================== Click but optimized

const img = document.querySelector(".wrap > img"),
	  buttons = document.querySelectorAll("button"),
	  imgSrc = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];

img.src = "img/0.jpg";



for(let i = 0; i < buttons.length; i++){
	let meme = imgSrc.length;
	buttons[i].addEventListener("click", function(){
		if(buttons[i].className == "prev"){
			meme--;
			if(meme >= 0){
				img.src = "img/" + meme + ".jpg";
				if(meme === 0){
					meme = imgSrc.length;
				}
			}
		}
	})


	let toto = 0;
	buttons[i].addEventListener("click", function(){
		if(buttons[i].className == "next"){
			toto++;
			if(toto >= 0){
				img.src = "img/" + toto + ".jpg";
				if(toto == imgSrc.length -1){
					toto = -1;
				}
			}
		}
	})
}