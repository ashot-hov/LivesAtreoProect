window.onload = function(){
	var cont = document.querySelector(".container");
	var moonSun = document.querySelector(".sunMoon");
	var row = document.querySelector(".row");

	var audio = new Audio(); // Создаём новый элемент Audio
	var startMusic = new Audio();
	startMusic.src = 'Audio/Super Mario World Theme Song (GFM Trap Remix).mp3'; // Указываем путь к звуку "клика"
  	startMusic.autoplay = true; // Автоматически запускаем	

  	
	var button = document.createElement("button");
	document.body.insertBefore(button, cont);
	button.innerText = "Dark Version";
	button.classList.add("dark");

	var btn = document.createElement("button");
	document.body.insertBefore(btn, cont);
	btn.innerText = "Lite Version";	
	btn.classList.add("lite");

	// var box = document.createElement("div");
	// document.body.insertBefore(box, row);
	// // box.innerHTML = "dfdfdfdfd";
	// box.classList.add("box");



	btn.onclick = function(){
		document.body.style.backgroundColor = "#F6F4F7";
		obj.src = "https://cdn0.iconfinder.com/data/icons/dinosaurs/128/dinosaurs-kick-scooter-128.png";
		moonSun.src = "https://cdn4.iconfinder.com/data/icons/nature-life-in-color/128/sun-64.png";
		audio.pause(); // Автоматически запускаем

	}

	button.onclick = function(){
		document.body.style.backgroundColor = "#000";
		// obj.src = "https://pbs.twimg.com/profile_images/897146155653513216/WVSXfpGW_400x400.jpg"; 

		obj.src = "https://cdn0.iconfinder.com/data/icons/dinosaurs/128/biking-128.png";
		moonSun.src = "https://cdn0.iconfinder.com/data/icons/astronomy/154/moon-star-space-planet-128.png";
  		audio.src = 'Audio/night.mp3'; // Указываем путь к звуку "клика"
  		audio.autoplay = true; // Автоматически запускаем

	}	


	var obj = document.createElement("img");
	obj.src = "https://cdn0.iconfinder.com/data/icons/dinosaurs/128/dinosaurs-kick-scooter-128.png";
	document.body.insertBefore(obj, cont);
	obj.classList.add("dino");

	document.onkeydown = function(event){
		console.log(event)

		if(event.code == "F10"){
			startMusic.pause();
		}
		if(event.code == "F9"){
			startMusic.play();
		}

		if(event.code == "Space"){
			obj.style.top = "-80px";
			var audioTwoo = new Audio(); // Создаём новый элемент Audio
 		 	audioTwoo.src = 'Audio/jump.mp3'; // Указываем путь к звуку "клика"
  			audioTwoo.autoplay = true; // Автоматически запускаем
		}

		if(event.code == "ArrowDown"){
			obj.style.transform = "";
		}	
	}

	document.onkeyup = function(event){
		// console.log(event);

		if(event.code == "Space"){
			obj.style.top = "0px";
		}

		if(event.code == "ArrowDown"){
			obj.style.top = "0px";			
		}

	}	
}