$( document ).ready(function() {
  var count=0;
  $('.small-nav-item').hide();
   $('.small-size-nav a').click(function(){
      if (count==0){
        count=1; 
        $('.navigation-small-size').addClass('navigation-small-size-open');
        $('.small-nav-item').fadeIn('slow');
      }
      else{
        count=0;
        $('.small-nav-item').fadeOut('slow');
        $('.navigation-small-size').delay(2000).removeClass('navigation-small-size-open');
      }
      
   });
});