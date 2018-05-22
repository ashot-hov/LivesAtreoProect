
const input = document.querySelector("#input"),
	  val = ["hello", "well", "bell", "Ashot", "closer", "close", "meddle", "run", "user", "big", "timer", "set", "interval", "placeholder", "float", "display", "zero", "up", "down", "hot", "cool", "col", "key", "mouse", "element", "good", "get", "bad", "main", "eco", "clock", "click", "align", "center", "right", "left", "personal", "kiss", "brother", "single", "shift", "asus", "lives", "atreo", "samsung", "xiaomi", "meizu", "lol", "link", "border"]

let rnad = valRandom(0, val.length);

function valRandom(max, min){
	let foo = val.length;
	input.placeholder = val[Math.floor((Math.random() * foo))];
}

let arr = [];

input.addEventListener("input", function cancelBubble(e){
	if(this.value == input.placeholder){
		arr.push(this.value);
		console.log(arr);  // just chek 

		let elem = document.createElement("div");
		count.appendChild(elem);
		elem.classList.add("elem");
		elem.innerText = this.value;

		out.innerText = "ok";
		if(out.innerText = "ok"){
			setTimeout(() =>{
				out.innerText = "";
			}, 300)
		}
		out.style.color = "green";
		setTimeout(() =>{
			this.value = "";
			valRandom();
		}, 700)
	}

	

})


let btn = document.getElementById("btn");

btn.addEventListener("click", start);

function start(){
	time();
}

function time(){
	let num = document.getElementById("outline"),
	porgres = document.getElementById("line"),
	i = setTieme.value;

	console.log(setTieme.value);

	lol = setInterval(function(){ line() }, 1000);

	function line() {
		num.innerText = i;
   		i--;

		if(i <= -1){
			clearInterval(lol);
		}

		function minus(){

			if(i <= 0){
				input.style.display = "none";
				all.innerText = `words count: ${arr.length}`;
			}else{
				input.style.display = "block";
			}
		}

		minus();
	}

}


/*

Сделать возможность включать таймер и счиать колличество ввенных символов. 

*/