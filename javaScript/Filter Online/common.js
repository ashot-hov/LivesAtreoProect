const img = document.querySelector(".defaultImg"),
	  range = document.querySelectorAll("input");

const getFiltres = () => `grayscale( ${f1.value}% )
						  blur( ${f2.value /30}px)
						  brightness( ${f3.value}% )
						  contrast( ${f4.value *2}%)
						  hue-rotate( ${f5.value}deg)
						  opacity( ${f6.value}% )
						  sepia( ${f7.value}% )`;




f1.addEventListener("input", function(){
	img.style.filter = getFiltres();
	rnageVal.innerHTML = this.value + "%";
})

f2.addEventListener("input", function(){
	img.style.filter = getFiltres();
	rnageVal2.innerHTML = this.value /30 + "px";
})

f3.addEventListener("input", function(){
	img.style.filter = getFiltres();
	rnageVal3.innerHTML = this.value+ "%";
})

f4.addEventListener("input", function(){
	img.style.filter = getFiltres();
	rnageVal4.innerHTML = this.value *2 + "%";
})

f5.addEventListener("input", function(){
	img.style.filter = getFiltres();
	rnageVal5.innerHTML = this.value + "deg";
})

f6.addEventListener("input", function(){
	img.style.filter = getFiltres();
	rnageVal6.innerHTML = this.value + "%";
})

f7.addEventListener("input", function(){
	img.style.filter = getFiltres();
	rnageVal7.innerHTML = this.value + "%";

})

// code.innerHTML = "filter: " + getFiltres() + ";";


for(let i = 0; i < range.length; i++){
	range[i].addEventListener("input", function(){
		code.innerHTML = `<h2>CSS code</h2>` + `<a id="close">&times;</a>` + `img{` + "<br>" + "     filter: " + getFiltres() + ";" + "<br>" + `}` ;		
		// code.classList.add("sideCode");
	let closed = document.querySelector("#close");
		closed.addEventListener("click",function(){code.classList.remove("sideCode")});
	})

	

		// filterCode.addEventListener("clcik", function(){
		// 	// code.classList.toggle("sideCode");
		// })

}

filterCode.onclick = function(){
	// alert("sdf")
	code.classList.toggle("sideCode");
}


code.innerHTML = getFiltres;

// viewCode.addEventListener("click",function(){code.style.display = "block"}); stop


// ================================================================ radius 


// radiusTopL.addEventListener("input", function(e){
// 	// img.style.borderTopLeftRadius = e.value;
// })


radiusTopL.oninput = function(){
	img.style.borderTopLeftRadius = this.value + "%";
}

radiusTopR.oninput = function(){
	img.style.borderTopRightRadius = this.value + "%";
}

radiusBotL.oninput = function(){
	img.style.borderBottomLeftRadius = this.value + "%";
}

radiusBotR.oninput = function(){
	img.style.borderBottomRightRadius = this.value + "%";
}

radius.oninput = function(){
	img.style.borderRadius = this.value + "%";
}




// ================================================== Choice Img


const choiseImg = document.querySelectorAll(".selectImg > img");

for(let i = 0; i < choiseImg.length; i++){
	choiseImg[i].addEventListener("click", function(){
		img.style.background = "url(" + choiseImg[i].src + ")";
		img.classList.add("responsive");
	})

	// если путь картинки не будет равен img[i] то тогда выводить надпись image is not defined

}

enter.addEventListener("click", function(){
	img.src = imgLink.value;
	img.style.background = "url(" + imgLink.value + ")";
	img.classList.add("responsive");
	if(imgLink.value === "" || imgLink.value === NaN || imgLink.value === undefined){
		img.style.background  = "url(https://images.pexels.com/photos/281184/pexels-photo-281184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)";
		img.classList.add("responsive");
	}

	imgLink.value = "";
})




filterMenu.addEventListener("click", function(){
	sideMenu.classList.add("side");
})

closeFilter.addEventListener("click", function(){
	sideMenu.classList.remove("side");
})


borderMenu.addEventListener("click", function(){
	radiusMenu.classList.add("side");
})

closeRadiusMenu.addEventListener("click", function(){
	radiusMenu.classList.remove("side");
})

addText.addEventListener("click", function(){
	plusText.classList.add("sidepanel");
})

closeTextMenu.addEventListener("click", function(){
	plusText.classList.remove("sidepanel");
})


// ==================================================================== Adding Text on the image 

const textarea = document.querySelector(".defaultImg > p");



textInput.addEventListener("input", function(){
	textarea.innerHTML = this.value;
})

textInput.addEventListener("click", function(){
	textarea.innerHTML = "Enter Your Text";
})

topBottom.addEventListener("input", function(){
	textarea.style.top = this.value + "%";
	val.innerHTML = this.value + "%";
})

leftright.addEventListener("input", function(){
	textarea.style.left = this.value + "%";
	val.innerHTML = this.value + "%";
})

size.addEventListener("input", function(){
	textarea.style.fontSize = this.value + "px";
})

function rgb(e){
	sr.innerHTML = r.value;
	sg.innerHTML = g.value;
	sb.innerHTML = b.value;
	palitra.style.background = "rgb(" + r.value + "," + g.value + "," + b.value + ")";
	palitra_code.value = "rgb(" + r.value + "," + g.value + "," + b.value + ")";
	textarea.style.color = "rgb(" + r.value + "," + g.value + "," + b.value + ")";
}




/* 
	
	добавить возможность увеличть изображение через scale колесиком мыши 
	и возможность добавлять текст 
	
		
*/




/*

изменять радиус у картинки и другие свойства
сделать возможность выбора картинки  (даже по ссылке)
показывать код одельном выдвежном меню



*/