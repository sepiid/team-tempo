$( document ).ready(function() {
    $("#owl-demo").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
    var width= $( window ).width()/16;
    $('.close-detail').click(function() {
        
            $('.product-image').animate({
            left:'-100em'
          },500 ).hide(500);
          $('.product-details').animate({
            right:'-100em'
          },500 ).hide(500);
        
         
    });
    $('#gravity').click(function() {
    
        $('.gravity-image').show().animate({
          left:0
        },500 );
        $('.gravity-detail').show().addClass('active').animate({
          right:0
        },500 );

    });
    
    $('#polar').click(function() {
      
        $('.polar-image').show().animate({
          left:0
        },500 );
        $('.polar-detail').show().animate({
          right:0
        },500 );
      
    });
    $('#iron').click(function() {
      $('.iron-image').show().animate({
          left:0
        },500 );
        $('.iron-detail').show().animate({
          right:0
        },500 );
    });
    $('#sun').click(function() {
      
        $('.sun-image').show().animate({
          left:0
        },500 );
        $('.sun-detail').show().animate({
          right:0
        },500 );
     
    });
    $('#trick').click(function() {
      
        $('.trick-image').show().animate({
          left:0
        },500 );
        $('.trick-detail').show().animate({
          right:0
        },500 );
     
    });
    $('#sphere').click(function() {
      
        $('.sphere-image').show().animate({
          left:0
        },500 );
        $('.sphere-detail').show().animate({
          right:0
        },500 );
     
    });
    $('#vinyl').click(function() {
      
        $('.vinyl-image').show().animate({
          left:0
        },500 );
        $('.vinyl-detail').show().animate({
          right:0
        },500 );
      
    });
    $('#solar').click(function() {
     
        $('.solar-image').show().animate({
          left:0
        },500 );
        $('.solar-detail').show().animate({
          right:0
        },500 );
    
    });
    
    
});