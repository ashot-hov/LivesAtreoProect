const number = document.querySelector("#out");
const bg = ["#27294F", "#35164F", "#FFD85A", "#96A2FF", "#52FF19", "#FF8146", "#FF4023", "#FF91EE", "#A2FF55", "#D900FF", "#272727", "#747474", "#741E1E", "#5D3974"]

setInterval(() => {
	document.body.style.background = bg[Math.floor((Math.random() *13) +1)];
	number.innerHTML = Math.floor((Math.random() *13) +1);
},2000);



// const bg = ["#27294F", "#35164F", "#FFD85A", "#96A2FF", "#52FF19", "#FF8146", "#FF4023", "#FF91EE", "#A2FF55", "#D900FF", "#272727", "#747474", "#741E1E", "#5D3974"]

// setInterval(() => {
// 	document.body.style.background = bg[Math.floor((Math.random() *13) +1)];
// },1000);