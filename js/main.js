$( document ).ready(function() {

    $("#owl-demo").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

  $('.product-details').css({height:window.height});
  $(window).resize(function() {
    $('.product-details').css({height:window.height});
  });
    
 
  $("#owl-demo2").owlCarousel({
 
      navigation : true, 
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true
 
     
 
  });
 $("#owl-demo3").owlCarousel({
 
      navigation : true, 
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true
 
     
 
  });
 $("#owl-demo4").owlCarousel({
 
      navigation : true, 
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true
 
     
 
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
    
    $('#sun').click(function() {
      
        $('.sun-image').show().animate({
          left:0
        },500 );
        $('.sun-detail').show().animate({
          right:0
        },500 );
     
    });
   
    $('#gravity-green').click(function() {
     
      document.getElementById("gravity-blue-watch").src="../img/gravity-green.jpg";
      document.getElementById("gravity-blue-angle-watch").src="../img/gravity-green-angle.jpg";
      document.getElementById("gravity-blue-side-watch").src="../img/gravity-green-side.jpg";
      $('#gravity-blue').animate({
          opacity:0.4
        },500 );
      $('#gravity-gray').animate({
          opacity:0.4
        },500 );
      $('#gravity-green').animate({
          opacity:1
        },500 );
      $("#gravity-link").attr("href", "../shopping-cart/gravity-green.html");
    });
    $('#gravity-blue').click(function() {
      
      document.getElementById("gravity-blue-watch").src="../img/gravity-blue.jpg";
      document.getElementById("gravity-blue-angle-watch").src="../img/gravity-blue-angle.jpg";
      document.getElementById("gravity-blue-side-watch").src="../img/gravity-blue-side.jpg";
      $('#gravity-blue').animate({
          opacity:1
        },500 );
      $('#gravity-gray').animate({
          opacity:0.4
        },500 );
      $('#gravity-green').animate({
          opacity:0.4
        },500 );
      $("#gravity-link").attr("href", "../shopping-cart/gravity-blue.html");
    });
    $('#gravity-gray').click(function() {
     
      document.getElementById("gravity-blue-watch").src="../img/gravity-gray.jpg";
      document.getElementById("gravity-blue-angle-watch").src="../img/gravity-gray-angle.jpg";
      document.getElementById("gravity-blue-side-watch").src="../img/gravity-gray-side.jpg";
      
      $('#gravity-green').animate({
          opacity:0.4
        },500 );
      $('#gravity-blue').animate({
          opacity:0.4
        },500 );
      $('#gravity-gray').animate({
          opacity:1
        },500 );
      $("#gravity-link").attr("href", "../shopping-cart/gravity-gray.html");
    });
    $('#sun-yellow').click(function() {
     
      document.getElementById("sun-yellow-watch").src="../img/sun-yellow.jpg";
      document.getElementById("sun-yellow-angle-watch").src="../img/sun-yellow-angle.jpg";
      document.getElementById("sun-yellow-side-watch").src="../img/sun-yellow-side.jpg";
      $('#sun-blue').animate({
          opacity:0.4
        },500 );
      $('#sun-white').animate({
          opacity:0.4
        },500 );
      $('#sun-yellow').animate({
          opacity:1
        },500 );
      $("#sun-link").attr("href", "../shopping-cart/sun-yellow.html");
    });
    $('#sun-white').click(function() {
      
      document.getElementById("sun-yellow-watch").src="../img/sun-white.jpg";
      document.getElementById("sun-yellow-angle-watch").src="../img/sun-white-angle.jpg";
      document.getElementById("sun-yellow-side-watch").src="../img/sun-white-side.jpg";
      $('#sun-white').animate({
          opacity:1
        },500 );
      $('#sun-yellow').animate({
          opacity:0.4
        },500 );
      $('#sun-blue').animate({
          opacity:0.4
        },500 );
      $("#sun-link").attr("href", "../shopping-cart/sun-white.html");
    });
    $('#sun-blue').click(function() {
     
      document.getElementById("sun-yellow-watch").src="../img/sun-blue.jpg";
      document.getElementById("sun-yellow-angle-watch").src="../img/sun-blue-angle.jpg";
      document.getElementById("sun-yellow-side-watch").src="../img/sun-blue-side.jpg";
      
      $('#sun-yellow').animate({
          opacity:0.4
        },500 );
      $('#sun-white').animate({
          opacity:0.4
        },500 );
      $('#sun-blue').animate({
          opacity:1
        },500 );
      $("#sun-link").attr("href", "../shopping-cart/sun-blue.html");
    });
    $('#polar-silver').click(function() {
     
      document.getElementById("polar-silver-watch").src="../img/polar-silver.jpg";
      document.getElementById("polar-silver-angle-watch").src="../img/polar-silver-angle.jpg";
      document.getElementById("polar-silver-side-watch").src="../img/polar-silver-side.jpg";
      $('#polar-sky').animate({
          opacity:0.4
        },500 );
      $('#polar-gold').animate({
          opacity:0.4
        },500 );
      $('#polar-silver').animate({
          opacity:1
        },500 );
      $("#polar-link").attr("href", "../shopping-cart/polar-silver.html");
    });
    $('#polar-gold').click(function() {
      
      document.getElementById("polar-silver-watch").src="../img/polar-gold.jpg";
      document.getElementById("polar-silver-angle-watch").src="../img/polar-gold-angle.jpg";
      document.getElementById("polar-silver-side-watch").src="../img/polar-gold-side.jpg";
      $('#polar-gold').animate({
          opacity:1
        },500 );
      $('#polar-sky').animate({
          opacity:0.4
        },500 );
      $('#polar-silver').animate({
          opacity:0.4
        },500 );
       $("#polar-link").attr("href", "../shopping-cart/polar-gold.html");
    });
    $('#polar-sky').click(function() {
     
      document.getElementById("polar-silver-watch").src="../img/polar-sky.jpg";
      document.getElementById("polar-silver-angle-watch").src="../img/polar-sky-angle.jpg";
      document.getElementById("polar-silver-side-watch").src="../img/polar-sky-side.jpg";
      
      $('#polar-silver').animate({
          opacity:0.4
        },500 );
      $('#polar-gold').animate({
          opacity:0.4
        },500 );
      $('#polar-sky').animate({
          opacity:1
        },500 );
       $("#polar-link").attr("href", "../shopping-cart/polar-sky.html");
    });
});