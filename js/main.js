$( document ).ready(function() {
    $("#owl-demo").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
    $('.close-detail').click(function() {

        $('.product-image').animate({
          left:'-70em'
        },500 );
        $('.product-details').animate({
          right:'-70em'
        },500 );

    });
    $('#gravity').click(function() {

        $('.gravity-image').animate({
          left:0
        },500 );
        $('.gravity-detail').animate({
          right:0
        },500 );

    });
    
    $('#polar').click(function() {

        $('.polar-image').animate({
          left:0
        },500 );
        $('.polar-detail').animate({
          right:0
        },500 );

    });
    $('#iron').click(function() {

        $('.iron-image').animate({
          left:0
        },500 );
        $('.iron-detail').animate({
          right:0
        },500 );

    });
    $('#sun').click(function() {

        $('.sun-image').animate({
          left:0
        },500 );
        $('.sun-detail').animate({
          right:0
        },500 );

    });
    $('#trick').click(function() {

        $('.trick-image').animate({
          left:0
        },500 );
        $('.trick-detail').animate({
          right:0
        },500 );

    });
    $('#sphere').click(function() {

        $('.sphere-image').animate({
          left:0
        },500 );
        $('.sphere-detail').animate({
          right:0
        },500 );

    });
    $('#vinyl').click(function() {

        $('.vinyl-image').animate({
          left:0
        },500 );
        $('.vinyl-detail').animate({
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