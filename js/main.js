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
    function itemSlide ( element, properties,properties2, options, positionX){
    	element.css({
    		visibility:'hidden',
    		position:'relative'
    	});
    	
    	element.css({
    		visibility: 'visible',
	        position: 'absolute',
	        left: positionX
	        
    	}).animate(properties, options).delay(500).addClass('active').animate(properties2, options);

	}
	  
	$( ".owl-item" ).click(function() {
		var positionX = $(this).position().left;
    	var props = { backgroundColor: '#fff','z-index':'10', 'left' : 0};
    	var props2={width:'25%',paddingRight:'18.75%' }
		var options = {'duration': 500};
		itemSlide($(this), props,props2, options,positionX);
		$('.owl-controls').animate({opacity:0});
	});
});