window.addEventListener("load", function (){
	const wrap = document.querySelector(".carWrap");

	const car = document.createElement("img");
		  car.className = "car";
	      car.src = "https://image.flaticon.com/icons/svg/296/296208.svg";



	const firstWheel = document.createElement("img");
		  firstWheel.className = "firstWheel";
		  firstWheel.src = "https://image.flaticon.com/icons/svg/859/859841.svg";


	const SecondWheel = document.createElement("img");
		  SecondWheel.className = "SecondWheel";
		  SecondWheel.src = "https://image.flaticon.com/icons/svg/859/859841.svg";


	const house = document.createElement("img");
		  house.className = "house";
		  house.src = "https://image.flaticon.com/icons/svg/149/149064.svg";


	const houseTwoo = document.createElement("img");
		  houseTwoo.className = "houseTwoo";
		  houseTwoo.src = "https://image.flaticon.com/icons/svg/609/609803.svg";





	document.querySelector(".cont").appendChild(house);
	document.querySelector(".cont").appendChild(houseTwoo);
	wrap.appendChild(firstWheel);
	wrap.appendChild(SecondWheel);
	wrap.appendChild(car);
	
	
})