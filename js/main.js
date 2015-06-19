$( document ).ready(function() {
    $("#owl-demo").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
    $('.close-detail').click(function() {

        $('.product-image').animate({
          left:'-50em'
        },2000 );
        $('.product-detail').animate({
          right:'-50em'
        },2000 );

    });
    $('#gravity').click(function() {

        $('.gravity-image').animate({
          left:0
        },2000 );
        $('.gravity-detail').animate({
          right:0
        },2000 );

    });
    
    $('.second-watch').click(function() {

        $('.second-image').animate({
          left:0
        },2000 );
        $('.second-detail').animate({
          right:0
        },2000 );

    });
    
    
});