function Timer(option){
	let time = 0;
	let int = 0;
	this.startTimer = () => {
		let iterval = setInterval(() => {
			time++;
			int = int + 6;
			console.log(time);
			sec.style.transform = "rotate(" + int + "deg)";
			if(time >= option.time){
				clearInterval(iterval);
				min.style.transform = "rotate(" + option.oneMore + "deg)";
			}
		}, 1000);
		
	}

}

let one = new Timer({
	time: 60,
	oneMore: 25
});

one.startTimer();