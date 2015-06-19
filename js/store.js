$( document ).ready(function() {
	$('.store').hide();
	$('.vancouver-store').show();
	$('.store-point').click(function(){ 
   		$('.store').hide("slow");
   });
	$('.close-store').click(function(){ 
   		$('.store').hide("slow");
   });
	$('.vancouver-store').css({
	   	left:$('#vancouver').position().left+ 10,
	   	top:$('#vancouver').position().top
   });
   $('#vancouver').click(function(){
   		$('.vancouver-store').show('slow');
   });
   $('.pittsburgh-store').css({
	   	left:$('#pittsburgh').position().left+ 10,
	   	top:$('#pittsburgh').position().top
   });
   $('#pittsburgh').click(function(){
   		$('.pittsburgh-store').show('slow');
   });
    $('.balma-store').css({
	   	left:$('#balma').position().left+ 10,
	   	top:$('#balma').position().top
   });
   $('#balma').click(function(){
   		$('.balma-store').show('slow');
   });
   $('.amsterdam-store').css({
	   	left:$('#amsterdam').position().left+ 10,
	   	top:$('#amsterdam').position().top
   });
   $('#amsterdam').click(function(){
   		$('.amsterdam-store').show('slow');
   });
   $('.frankfurt-store').css({
	   	left:$('#frankfurt').position().left+ 10,
	   	top:$('#frankfurt').position().top
   });
   $('#frankfurt').click(function(){
   		$('.frankfurt-store').show('slow');
   });
   $('.nanyang-store').css({
	   	left:$('#nanyang').position().left+ 10,
	   	top:$('#nanyang').position().top
   });
   $('#nanyang').click(function(){
   		$('.nanyang-store').show('slow');
   });
   $(window).resize(function(){
      $('.vancouver-store').css({
         left:$('#vancouver').position().left+ 10,
         top:$('#vancouver').position().top
      });
      $('.pittsburgh-store').css({
            left:$('#pittsburgh').position().left+ 10,
            top:$('#pittsburgh').position().top
      });
       $('.balma-store').css({
            left:$('#balma').position().left+ 10,
            top:$('#balma').position().top
      });
      $('.amsterdam-store').css({
            left:$('#amsterdam').position().left+ 10,
            top:$('#amsterdam').position().top
      });
      $('.frankfurt-store').css({
            left:$('#frankfurt').position().left+ 10,
            top:$('#frankfurt').position().top
      });
      $('.nanyang-store').css({
            left:$('#nanyang').position().left+ 10,
            top:$('#nanyang').position().top
      });
   });

   
});
            