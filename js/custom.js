$( document ).ready(function() {
    
    $("#owl-demo").owlCarousel({
        navigation : true, 
        singleItem:true
    });
    heightResponsive();
        $(window).bind('resize', heightResponsive);
    });
function heightResponsive() {
    var height = $(window).height();
    $('#owl-demo .item img').css('height',height);
}
            