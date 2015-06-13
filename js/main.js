$( document ).ready(function() {
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    	if (scroll>= 47){
    		$('nav').addClass('nav-fixed');
    	}
    	else{
    		$('nav').removeClass('nav-fixed');
    	}
    });
    $("#owl-demo").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

});