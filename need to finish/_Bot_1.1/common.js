let botConfig = require("./bot-config.json"),
	userJSON = require("./user-config.json");

function Bot(options){
	if(options.userAsk == userSay){
		this.start = (form, to) =>{

			// User asked
			let foo = userJSON.greet.length;
			console.log(userJSON.greet[Math.floor((Math.random() * foo))]);


			// Bot answered
			setTimeout(()=>{
				console.log("...");
				setTimeout(()=>{
					let foo = botConfig.greet.length;
					console.log(botConfig.greet[Math.floor((Math.random() * foo))]);

					console.log("__________________________");
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

// first.start();

setInterval(()=>{
	first.start();
}, 2500);




// TODO: Make new object with items for talking theme