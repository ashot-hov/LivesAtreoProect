window.onload = function lounchBot(){
	let cont = document.querySelector("#cont");
	let launch = document.createElement("button");
	launch.innerHTML = "launch bot";
	document.body.insertBefore(launch, cont);
	launch.classList.add("launch");
}


document.getElementById("send").onclick = function() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.classList.add("user")
  li.appendChild(t);
  document.getElementById("myInput").value = "";
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

// let before = document.getElementById("before")


	let answer = document.createElement("li");
  	// answer.innerText = "barev ape";
  	answer.classList.add("bot");
	document.body.insertBefore(answer, cont);  	


	if(li.innerText == "привет" || li.innerText == "кто ты" || li.innerText == "кто ты такая"){
		answer.innerText = "Здравствуй! Мое имя Карет. Я была создана разработчиками компании Live`s - atreo. Меня написали на языке Java Script.";
	}else if(li.innerText == "кто ты такой"){
		answer.innerText = "Я не 'не такой' я ТАКАЯ!";
	}else if(li.innerText == "какая"){
		answer.innerText = "Это сверх вашего понемания =)";
	}else if(li.innerText == "как дела"){
		answer.innerText = "Первосходно";
	}else if(li.innerText == "что ты можешь" || li.innerText == "что ты умеешь"){
		answer.innerText = "пока что только отвечать на некоторые вопросы, но я совершенствуюсь";
	}else if(li.innerText == "сколько тебе лет"){	
		answer.innerText = "А вам сколько надо?";
	}

	// ============= Open links ============ //


	else if(li.innerText == "открой youtube"){
		let ytLink = document.createElement("a");
  		// answer.innerText = "barev ape";
  		ytLink.classList.add("bot");
  		ytLink.innerText = "Нажми на меня, что бы попасть на Youtube";
  		ytLink.href = "https://www.youtube.com";
  		ytLink.target = "_blank";
		document.body.insertBefore(ytLink, cont);	
	}

	else if(li.innerText == "открой vk"){
		let vkLink = document.createElement("a");
  		vkLink.classList.add("bot");
  		vkLink.innerText = "Нажми на меня, что бы попасть в vk";
  		vkLink.href = "https://www.vk.com";
  		vkLink.target = "_blank";
		document.body.insertBefore(vkLink, cont);	
	}	

	else if(li.innerText == "открой инстаграм"){
		let instaLink = document.createElement("a");
  		instaLink.classList.add("bot");
  		instaLink.innerText = "Нажми на меня, что бы попасть в нистаграм";
  		instaLink.href = "https://www.instagram.com/";
  		instaLink.target = "_blank";
		document.body.insertBefore(instaLink, cont);	
	}		

	let askMe = ["one", "two", "three","four", "five", "six", "seven", "eight", "nine", "ten"];

if(li.innerText == "say me number"){
	answer.innerText = askMe[Math.floor((Math.random() *  9) + 1)];
}

}





