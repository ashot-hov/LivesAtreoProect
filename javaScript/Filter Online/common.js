// const img = document.querySelector("img"),
// 	  range = document.querySelectorAll("input");

// let sepia = 'sepia(0%) ',
// blur =' grayscale(0%) ';

// f1.addEventListener("input", function(){
// 	sepia = "sepia(" + f1.value + '%' + ")";

// 	img.style.filter = sepia;


	
// })

// f2.addEventListener("input", function(){
// 	blur = "blur(" + f1.value + f2.value + '%' + ")";
// 	console.log(blur);
// 	img.style.filter = blur;


	
// })


// // f2.addEventListener("input", function(){
	
// // 	img.style.filter = "blur(" + f2.value  /30 + 'px' + ")";

// // })

// // f3.addEventListener("input", function(){
// // 	img.style.filter = "brightness(" + f3.value + '%' + ")";
// // })

// // f4.addEventListener("input", function(){
// // 	img.style.filter = "contrast(" + f4.value *2 + '%' + ")";
// // })

// // f5.addEventListener("input", function(){
// // 	img.style.filter = "hue-rotate(" + f5.value  + 'deg' + ")";
// // })







// =================================================================================================

const img = document.querySelector(".defaultImg > img"),
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
		code.classList.add("code");
		let closed = document.querySelector("#close");
		closed.addEventListener("click",function(){code.style.display = "none"});
	})

}



viewCode.addEventListener("click",function(){code.style.display = "block"});


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


const choiseImg = document.querySelectorAll(".choice > img");

for(let i = 0; i < choiseImg.length; i++){
	choiseImg[i].addEventListener("click", function(){
		img.src = choiseImg[i].src;
	})
}

enter.addEventListener("click", function(){
	img.src = imgLink.value;
	imgLink.value = "";
})















































/*

изменять радиус у картинки и другие свойства
сделать возможность выбора картинки  (даже по ссылке)
показывать код одельном выдвежном меню



*/