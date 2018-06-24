"use strict";

function CreateTag(options) {
	var item = void 0;
	var place = document.querySelector(options.parentPlace);
	this.begin = function () {
		item = document.createElement(options.tag);
		item.classList = options.tagClass;
		item.innerHTML = options.tagContent;
	};

	this.pastElementInDocument = function () {
		document.body.appendChild(item);
	};

	this.beginAndPastDoc = function () {
		item = document.createElement(options.tag);
		item.classList = options.tagClass;
		item.innerHTML = options.tagContent;
		document.body.appendChild(item);
	};

	this.beginAndPastPlace = function () {
		item = document.createElement(options.tag);
		item.classList = options.tagClass;
		item.innerHTML = options.tagContent;
		place.appendChild(item);
	};

	this.pastElemSelected = function () {
		place.appendChild(item);
	};

	this.removeElemInPrarent = function () {
		place.removeChild(item);
	};

	this.removeElemInDoc = function () {
		document.body.removeChild(item);
	};

	this.getEvent = function (event, fun1) {
		item.addEventListener(event, fun1);
	};

	this.removeEvent = function (event, fun1) {
		item.removeEventListener(event, fun1);
	};
}

var p = new CreateTag({
	tag: "p",
	tagClass: "item",
	tagContent: "Hello, how are you?",
	parentPlace: "#out"
});

p.begin();
p.pastElementInDocument();

var btn = new CreateTag({
	tag: "button",
	tagContent: "Click me!",
	tagClass: "button"
});

btn.begin();
btn.pastElementInDocument();

btn.getEvent("click", lol);

function lol() {
	alert("121212");
}

// btn.removeEvent("click", lol);


var span = new CreateTag({
	tag: "span",
	tagClass: "span",
	tagContent: "I am span!"
});

for (var i = 0; i < 5; i++) {
	span.begin();
	span.pastElementInDocument();
}

var h2 = new CreateTag({
	tag: "h2",
	tagClass: 'h2',
	tagContent: "What`s up",
	parentPlace: "#out"
});

// h2.beginAndPastDoc();
h2.beginAndPastPlace();

// =========================================================================   


function Atreo(options) {
	var la = document.querySelector(options.el);

	if (la.innerText == "{{ message }}") {
		la.innerHTML = options.data.message;
	}

	// const dataTitle = 
	this.setTitle = function () {
		if (la.firstElementChild.attributes[0].value == "message") {
			la.firstElementChild.title = options.data.message;
		}
	};

	this.dataSeen = function () {
		if (la.firstElementChild.attributes[0].value == "seen") {
			la.firstElementChild.style.display = options.data.seen;
			if (options.data.seen == true) {
				la.firstElementChild.style.display = "block";
			}
			if (options.data.seen == false) {
				la.firstElementChild.style.display = "none";
			}
		}
	};
}

var app4 = new Atreo({
	el: "#app4",
	data: {
		seen: false
	}
});

app4.dataSeen();

var app = new Atreo({
	el: "#app",
	data: {
		message: "Hello Atreo!"
	}
});

var foo = new Atreo({
	el: "#app2",
	data: {
		message: "<h2>Hello Man<h2>"
	}
});

var second = new Atreo({
	el: "#app3",
	data: {
		message: "whats up"
	}

});

second.setTitle();

//  link: https://vuejs.org/v2/guide/              (message section)