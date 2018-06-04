const input = document.querySelector("input"),
	  btn = document.querySelector("#add"),
	  taskWrap = document.querySelector(".taskWrap"),
	  taskData  = document.querySelector("#data");


btn.addEventListener("click", addTask);
// taskData.addEventListener("input", dataInput);

function addTask(){
	if(input.value != ""){
		let newTask = document.createElement("div");
		newTask.className = "newTask";
		taskWrap.appendChild(newTask);
		newTask.innerHTML = `
		<p class="checkDone">${input.value}</p> 
		<b id="taskDataValue">(${taskData.value})</b>
		<span class="removeTask">&#10006;</span>
		`;

		input.value = "";
		taskData.value = "";
		searchItems();

	}

}

function searchItems(){
	if(document.querySelector(".newTask")){
		console.log("ready")
		searchBtns();
		done();

	}else{
		console.log("no ready")
	}
}

function searchBtns(){
	let removeBtns = document.querySelectorAll(".removeTask");
	for(let i = 0; i < removeBtns.length; i++){
		removeBtns[i].onclick = function(){
			let oneMore = this.parentElement;
			// taskWrap.removeChild(oneMore);
			oneMore.classList.add("fadeOut");
			setTimeout(importantDelete, 100);
			function importantDelete(){
				taskWrap.removeChild(oneMore);
			}
		}
	}
}


function done(){
	let taskItems = document.querySelectorAll(".checkDone");
	for(let i = 0; i < taskItems.length; i++){
		console.log(taskItems[i]);
		taskItems[i].onclick = function(){
			taskItems[i].classList.toggle("done");
		}
	}
	
}


// function dataInput(){
// 	let dataVal = this.value;
// }