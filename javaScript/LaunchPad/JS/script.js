// let btn = document.querySelector("#test");



// btn.onclick = function(){
// 	startMusic.play();

// }


let audio = new Audio(); 
let startMusic = new Audio();
startMusic.src = "";  //   C:/Users/root/Desktop/LaunchPad/sounds/1.mp3
startMusic.autoplay = false;



document.onkeydown = function(event){
	console.log(event);

// ===============================Four Start===================================================

	if(event.code == "KeyP"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/s1.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('s1').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('s1').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyO"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/s2.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('s2').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('s2').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyL"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/s3.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('s3').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('s3').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyK"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/s4.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('s4').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('s4').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyO"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/s2.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('s2').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('s2').classList.remove("active");
			}, 200)	

		}
		active();

	}

// ===================================Four End=========================================


// ===================================Five Start=========================================

	if(event.code == "KeyZ"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/t1.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('t1').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('t1').classList.remove("active");
			}, 200)	

		}
		active();

	}


	if(event.code == "KeyX"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/t2.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('t2').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('t2').classList.remove("active");
			}, 200)	

		}
		active();

	}


	if(event.code == "KeyM"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/t3.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('t3').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('t3').classList.remove("active");
			}, 200)	

		}
		active();

	}


	if(event.code == "KeyN"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/t4.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('t4').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('t4').classList.remove("active");
			}, 200)	

		}
		active();

	}

// ===================================Five End=========================================


// ===================================Twoo And One Start=========================================


	if(event.code == "Digit1"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/1.mp3";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('one').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('one').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "Digit2"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/2.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('twoo').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('twoo').classList.remove("active");
			}, 200)	

		}
		active();

	}	

	if(event.code == "Digit9"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/r1.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('r1').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('r1').classList.remove("active");
			}, 200)	

		}
		active();

	}	

	if(event.code == "Digit0"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/r2.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('r2').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('r2').classList.remove("active");
			}, 200)	

		}
		active();

	}

// ===================================Twoo And One End=========================================

// ===================================Three End=========================================

	if(event.code == "KeyQ"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a1.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a1').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a1').classList.remove("active");
			}, 200)	

		}
		active();

	}


	if(event.code == "KeyW"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a2.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a2').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a2').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyE"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a3.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a3').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a3').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyR"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a4.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a4').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a4').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyT"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a5.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a5').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a5').classList.remove("active");
			}, 200)	

		}
		active();

	}


	if(event.code == "KeyA"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a6.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a6').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a6').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyS"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a8.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a7').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a7').classList.remove("active");
			}, 200)	

		}
		active();

	}

	if(event.code == "KeyD"){
		startMusic.src = "C:/Users/root/Desktop/LaunchPad/sounds/a9.wav";
		startMusic.play();

		function active(){
			setTimeout(function(){
				document.getElementById('a8').classList.add("active");
			}, 50)

			setTimeout(function(){
				document.getElementById('a8').classList.remove("active");
			}, 200)	

		}
		active();

	}


// ===================================Three End=========================================



}



























/*

KeyP
KeyO
KeyL
KeyK
KeyQ
KeyW
KeyE
KeyR
KeyT
KeyA
KeyS
KeyD

Digit1
Digit2
Digit9
Digit0



*/