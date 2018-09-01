let botConfig = require("./bot-config.json"),
	userJSON = require("./user-config.json");


function Bot(options){
	if(options.userAsk == userSay){
		// User asked
		let foo = userJSON.greet.length;
		console.log(userJSON.greet[Math.floor((Math.random() * foo))]);

		// Bot answered
		this.start = (form, to) =>{
			setTimeout(()=>{
				console.log("...");
				setTimeout(()=>{
					let foo = botConfig.greet.length;
					console.log(botConfig.greet[Math.floor((Math.random() * foo))]);
				}, 700)
			}, 1000)
		}		
	}

}


let userSay;
	for(let userWord = 0; userWord < userJSON.greet; userWord++){
		userSay = userWord;
	}

let first = new Bot({
	userAsk: userSay
})

first.start();



// TODO: Create a new json file for user