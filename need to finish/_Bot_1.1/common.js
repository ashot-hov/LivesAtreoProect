let parsedJSON = require("./config.json");


function Bot(options){
	if(options.userAsk == "Hello"){
		this.start = (form, to) =>{
			let foo = parsedJSON.greet.length;
			console.log(parsedJSON.greet[Math.floor((Math.random() * foo))]);
		}		
	}

}

let first = new Bot({
	userAsk: "Hello"
})

first.start();