let arr = 0;
createItems();



function createItems(){
	
	let intvl = setInterval(() => {
		let some;
		function itemsValue(){
			some = Math.floor((Math.random() *2) *1)
		}

		for(let i = 0; i < 1; i++){
			itemsValue()
			let item = document.createElement("p");
			wrap.appendChild(item);
			item.innerHTML = some;
			arr++;
			console.log(arr);
			if(arr >= 22){
				clearInterval(intvl);	
				// item.classList.add("leave");
				let allItems = document.querySelectorAll("p")
				for(let y = 0; y < allItems.length; y++){
					document.body.removeChild(wrap);
				}
			}
		}
	}, 100)

}
