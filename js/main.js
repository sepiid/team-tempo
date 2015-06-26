$( document ).ready(function() {
    $("#owl-demo").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
    var width= $( window ).width()/16;
    $('.close-detail').click(function() {
        if(width>57){
            $('.product-image').animate({
            left:'-70em'
          },500 );
          $('.product-details').animate({
            right:'-70em'
          },500 );
        }  
         else{
          $('.product-image').animate({
            top:'-70em'
          },500 );
          $('.product-details').animate({
            bottom:'-70em'
          },500 );
        } 
    });
    $('#gravity').click(function() {
    if(width>57){    
        $('.gravity-image').animate({
          left:0
        },500 );
        $('.gravity-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.gravity-image').animate({
          top:0
        },500 );
        $('.gravity-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    
    $('#polar').click(function() {
      if(width>57){ 
        $('.polar-image').animate({
          left:0
        },500 );
        $('.polar-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.polar-image').animate({
          top:0
        },500 );
        $('.polar-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    $('#iron').click(function() {
      if(width>57){ 
        $('.iron-image').animate({
          left:0
        },500 );
        $('.iron-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.iron-image').animate({
          top:0
        },500 );
        $('.iron-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    $('#sun').click(function() {
      if(width>57){ 
        $('.sun-image').animate({
          left:0
        },500 );
        $('.sun-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.sun-image').animate({
          top:0
        },500 );
        $('.sun-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    $('#trick').click(function() {
      if(width>57){ 
        $('.trick-image').animate({
          left:0
        },500 );
        $('.trick-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.trick-image').animate({
          top:0
        },500 );
        $('.trick-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    $('#sphere').click(function() {
      if(width>57){ 
        $('.sphere-image').animate({
          left:0
        },500 );
        $('.sphere-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.sphere-image').animate({
          top:0
        },500 );
        $('.sphere-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    $('#vinyl').click(function() {
      if(width>57){ 
        $('.vinyl-image').animate({
          left:0
        },500 );
        $('.vinyl-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.vinyl-image').animate({
          top:0
        },500 );
        $('.vinyl-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    $('#solar').click(function() {
      if(width>57){ 
        $('.solar-image').animate({
          left:0
        },500 );
        $('.solar-detail').animate({
          right:0
        },500 );
      }
      else{
        $('.solar-image').animate({
          top:0
        },500 );
        $('.solar-detail').animate({
          bottom:0
        },500 );
      
      }
    });
    
    
});