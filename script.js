

$(document).ready(function(){
	$(".scrollTo").on('click', function(e) {
	     e.preventDefault();
	     var target = $(this).attr('href');
	     $('html, body').animate({
	       scrollTop: ($(target).offset().top)
	     }, 1000);
  	});
  	$(".btn").click(function(){
  		var nama = $('#name').val();
  		alert("Terima Kasih, "+nama+" telah memberi masukan")
  	})
  	
	
})