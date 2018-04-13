let today = new Date(),
	month = today.getMonth()+1,
	day = today.getDate(),
	year = today.getFullYear();

if(month < 10) month = "0" + month;
if(day < 10) day = "0" + day;

myDate.innerHTML = day + "/" + month + "/" + year;













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


		let today = new Date(),
			month = today.getMonth()+1,
			day = today.getDate(),
			year = today.getFullYear();

		if(month < 10) month = "0" + month;
		if(day < 10) day = "0" + day;

		myDate.innerHTML = day + "/" + month + "/" + year;


		var type = 'data:application/octet-stream;base64, ';
		var text = "Price of each order: " + numArr + "    Date: " + day + "/" + month + "/" + year;
		var base = btoa(text);
		var res = type + base;
		// document.getElementById('test').href = res;
		var allres = day + "/" + month + "/" + year
		test.href = res;


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

	count.innerText = "= " + mysum;




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












// var type = 'data:application/octet-stream;base64, ';
// 	var text = ;
// 	var base = btoa(text);
// 	var res = type + base;
// 	document.getElementById('test').href = res;












// function CreateFile()
// {
//   var fso, tf;
//   fso = new ActiveXObject("Scripting.FileSystemObject");
//   tf = fso.CreateTextFile("c:\\testfile.txt", true);
//   // Вставка строки с переносом на новую.
//   tf.WriteLine("Testing 1, 2, 3.") ;
//   // Вставка 3 пустых строк.
//   tf.WriteBlankLines(3) ;
//   // Вставка новой строки, без переноса.
//   tf.Write ("This is a test.");
//   ' Закрытие файла.'
//   tf.Close();
// } 


