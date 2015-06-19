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
        $('.product-detail').animate({
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
    
    $('.second-watch').click(function() {

        $('.second-image').animate({
          left:0
        },500 );
        $('.second-detail').animate({
          right:0
        },500 );

    });
    
    
});