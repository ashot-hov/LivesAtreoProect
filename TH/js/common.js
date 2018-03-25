document.addEventListener("click", function(event){
	let target = event.target;
	if(target.className == "icon"){
		let x = document.getElementById("myTopnav");
		if(x.className == "topnav"){
			x.className += " responsive";
		}else{
			x.className = "topnav";
		}
	}
})



$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-long-arrow-left'></i>",
    "<i class='fa fa-long-arrow-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})