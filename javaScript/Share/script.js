var ul = document.getElementById("ules");
var btn = document.getElementsByClassName("btn");

document.onclick = function(event){
	var target = event.target;
	if(target.className === "btn"){
		ul.classList.toggle("active");
	}
}	

