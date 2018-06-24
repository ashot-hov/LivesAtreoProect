function CreateTag(options){ 
	let item; 
	let place = document.querySelector(options.parentPlace);
	this.begin = () => { 
		item = document.createElement(options.tag); 
		item.classList = options.tagClass; 
		item.innerHTML = options.tagContent; 
	} 

	this.pastElementInDocument = () => {
		document.body.appendChild(item);
	}

	this.beginAndPastDoc = () => {
		item = document.createElement(options.tag); 
		item.classList = options.tagClass; 
		item.innerHTML = options.tagContent; 
		document.body.appendChild(item);

	}

	this.beginAndPastPlace = () => {
		item = document.createElement(options.tag); 
		item.classList = options.tagClass; 
		item.innerHTML = options.tagContent; 
		place.appendChild(item);
	}

	this.pastElemSelected = () => {
		place.appendChild(item);
	}

	this.removeElemInPrarent = () => {
		place.removeChild(item); 
	}

	this.removeElemInDoc = () => {
		document.body.removeChild(item);
	}

	this.getEvent = (event, fun1) => {
		item.addEventListener(event, fun1);
	}

	this.removeEvent = (event, fun1) => {
		item.removeEventListener(event, fun1);
	}

} 


let p = new CreateTag({
	tag: "p",
	tagClass: "item",
	tagContent: "Hello, how are you?",
	parentPlace: "#out"
}); 


p.begin(); 
p.pastElementInDocument();


let btn = new CreateTag({
	tag: "button",
	tagContent: "Click me!",
	tagClass: "button"
})

btn.begin();
btn.pastElementInDocument();

btn.getEvent("click", lol);

function lol(){
	alert("121212");
}

// btn.removeEvent("click", lol);


let span = new CreateTag({
	tag: "span",
	tagClass: "span",
	tagContent: "I am span!"
})



for(let i = 0; i < 5; i++){
	span.begin();
	span.pastElementInDocument();
}



let h2 = new CreateTag({
	tag: "h2",
	tagClass: 'h2',
	tagContent: "What`s up",
	parentPlace: "#out"
});

// h2.beginAndPastDoc();
h2.beginAndPastPlace();





// =========================================================================   



function Atreo(options){
	const la = document.querySelector(options.el);

	if(la.innerText == "{{ message }}"){
		la.innerHTML = options.data.message;
	}
	

	// const dataTitle = 
	this.setTitle = () => {
		if(la.firstElementChild.attributes[0].value == "message"){
			la.firstElementChild.title = options.data.message;
		}
	}

	this.dataSeen = () => {
		if(la.firstElementChild.attributes[0].value == "seen"){
			la.firstElementChild.style.display = options.data.seen;
			if(options.data.seen == true){
				la.firstElementChild.style.display = "block";
			}
			if(options.data.seen == false){
				la.firstElementChild.style.display = "none";
			}
		}
	}
}


let app4 = new Atreo({
	el: "#app4",
	data: {
		seen: false
	}
})

app4.dataSeen();



let app = new Atreo({
	el: "#app",
	data: {
		message: "Hello Atreo!"
	}
}) 



let foo = new Atreo({
	el: "#app2", 
	data: {
		message: "<h2>Hello Man<h2>"
	}
})



let second = new Atreo({
	el: "#app3",
	data: {
		message: "whats up"
	}

})

second.setTitle()




//  link: https://vuejs.org/v2/guide/              (message section) 