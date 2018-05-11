 $(".tab_item").not(":first").hide();
      $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass("active");






$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
     event.preventDefault();
 
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);

    });

});



arrow.addEventListener("click", function(){
	if(elem.style.display === "none"){

		elem.style.display = "block";
	}else{
		elem.style.display = "none";
	}
})