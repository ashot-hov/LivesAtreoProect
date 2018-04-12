let input = document.querySelector("input"),
	sumArr = [],
	sum = 0;
	// count.innerHTML = 0;


input.oninput = function(){
	// console.log(this.value);
	this.value = this.value.replace (/\D/gi, '').replace (/^0+/, '')
	// out.innerText = this.value;
}

btn.onclick = function(){
	let mony = document.createElement("div");
	// document.body.(mony, count);
	wrap.appendChild(mony);
	mony.classList.add("mony");
	mony.innerText = input.value;
	input.value = "";


	sumArr.push(mony.innerHTML);
	console.log(sumArr);

	let numArr = []
	for(i = 0; i < sumArr.length; i++){
		numArr.push(Number(sumArr[i]));
	}
	// numArr.push(Number(sumArr));
	console.log(numArr);

	for(let i = 0; i < numArr.length; i++){
		sum = sum + parseInt(numArr[i]);
		// sum =+ mony.innerHTML;
		// console.log(sum);	
	}

	// numArr.reduce(function(a,b){
	// 	// return previousValue + currentValue;
	// 	return console.log(a + b);
	// })

	let mysum = numArr.reduce(add, 0);
	function add(a,b){
		return a + b;
	}

	console.log(mysum);

	count.innerText = mysum + " rub";




	if(mony.innerText == ""){
		mony.parentNode.removeChild(mony);
	}


	

	result();

	// console.log(mony.innerHTML);
}

function result(){
	let allMony = document.querySelectorAll(".mony");
	// console.log(allMony);

}


// var arr = ['2', '6', '7'];
// var sum=0;
// for(var i=0;i<arr.length;i++){
//     sum = sum + parseInt(arr[i]);

// }
// alert(sum); 

// Сделать значение count равной суммы всех числел масива   (sum)