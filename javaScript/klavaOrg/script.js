const input = document.querySelector("input"),
	  val = ["hello", "well", "bell", "Ashot", "big", "placeholder", "personal", "kiss", "brother", "single", "shift", "asus", "lives", "atreo", "samsung", "xiaomi", "meizu", "lol", "link", "border", ""]

let rnad = valRandom(0, val.length);

function valRandom(max, min){
	let foo = val.length;
	input.placeholder = val[Math.floor((Math.random() * foo))];
}

input.addEventListener("input", function cancelBubble(e){
	if(this.value == input.placeholder){
		out.innerText = "ok";
		if(out.innerText = "ok"){
			setTimeout(() =>{
				out.innerText = "";
			}, 300)
		}
		out.style.color = "green";
		setTimeout(() =>{
			this.value = "";
			// console.log(this);
			valRandom();
		}, 700)
	}

}) 
