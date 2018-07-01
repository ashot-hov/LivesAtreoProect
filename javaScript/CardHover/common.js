let cards = document.querySelectorAll(".container  .card");
	

for(let i of cards){
	i.addEventListener("mousemove", function(event){
		let y = event.clientY,
			x = event.clientX;
		let images = document.querySelectorAll(".card  img");
		i.style.transform = `rotateX(${y/40}deg) rotateY(${x/40}deg)`;
		for(let i of images){
			i.addEventListener("mousemove", function(event){
				i.style.transform = `translateX(${-y/10}px) translateY(${-x/10}px)`;
			})
		}

	})
}
