const botConfig = require("./bot-config.json"),
	  userJSON = require("./user-config.json");

	  let emptyArr = [];
	  let usedFrases = [];

function Bot(options){
	if(options.userAsk == userSay){
		this.start = (form, to) =>{

			// User asked
			{
				let foo = userJSON.greet.length;
				

				let rand = userJSON.greet[Math.floor((Math.random() * foo))];
				emptyArr.push(rand);
				// console.log(emptyArr);

				console.log(emptyArr[emptyArr.length - 1]);
				

				usedFrases.push(emptyArr[emptyArr.length - 1]);
				// console.log(`used frases ${usedFrases} `);

				if(usedFrases.length === emptyArr){
					emptyArr.splice(0, emptyArr.length);
				}


			}


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










































// TODO: пушить все вопросы юзра в пустой масив и уже выводить в консоль вопрос из масива, /*  Done */
// TODO: сделать проверку, если "этот" вопрос был в масиве то уже не выводить его в консоль


// TODO: Make new object with items for talking theme