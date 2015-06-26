$( document ).ready(function() {
    $("#owl-demo").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
    var width= $( window ).width()/16;
    $('.close-detail').click(function() {
        
            $('.product-image').removeClass('active').animate({
            left:'-70em'
          },500 );
          $('.product-details').removeClass('active').animate({
            right:'-70em'
          },500 );
        
         
    });
    $('#gravity').click(function() {
    
        $('.gravity-image').addClass('active').animate({
          left:0
        },500 );
        $('.gravity-detail').addClass('active').animate({
          right:0
        },500 );

    });
    
    $('#polar').click(function() {
      
        $('.polar-image').addClass('active').animate({
          left:0
        },500 );
        $('.polar-detail').addClass('active').animate({
          right:0
        },500 );
      
    });
    $('#iron').click(function() {
      $('.iron-image').addClass('active').animate({
          left:0
        },500 );
        $('.iron-detail').addClass('active').animate({
          right:0
        },500 );
    });
    $('#sun').click(function() {
      
        $('.sun-image').addClass('active').animate({
          left:0
        },500 );
        $('.sun-detail').addClass('active').animate({
          right:0
        },500 );
     
    });
    $('#trick').click(function() {
      
        $('.trick-image').addClass('active').animate({
          left:0
        },500 );
        $('.trick-detail').addClass('active').animate({
          right:0
        },500 );
     
    });
    $('#sphere').click(function() {
      
        $('.sphere-image').addClass('active').animate({
          left:0
        },500 );
        $('.sphere-detail').addClass('active').animate({
          right:0
        },500 );
     
    });
    $('#vinyl').click(function() {
      
        $('.vinyl-image').addClass('active').animate({
          left:0
        },500 );
        $('.vinyl-detail').addClass('active').animate({
          right:0
        },500 );
      
    });
    $('#solar').click(function() {
     
        $('.solar-image').animate({
          left:0
        },500 );
        $('.solar-detail').animate({
          right:0
        },500 );
    
    });
    
    
});