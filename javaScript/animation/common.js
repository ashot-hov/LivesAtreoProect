let one = document.getElementsByClassName("out")[0];
let twoo = document.getElementsByClassName("out")[1];
let three = document.getElementsByClassName("out")[2];

function repeatOne(){
	setTimeout(function(){
		one.classList.add("one");
	}, 1000)

	setTimeout(function(){
		one.classList.remove("one");
	}, 2000)	
}

setInterval(repeatOne, 2000);

function repeatTwoo(){
	setTimeout(function(){
		twoo.classList.add("twoo");
	}, 1000)

	setTimeout(function(){
		twoo.classList.remove("twoo");
	}, 2000)	
}

setInterval(repeatTwoo, 2000);

function repeatThree(){
	setTimeout(function(){
		three.classList.add("three");
	}, 1000)

	setTimeout(function(){
		three.classList.remove("three");
	}, 2000)	
}

setInterval(repeatThree, 2000);

