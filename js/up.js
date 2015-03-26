// back to top
$(document).ready(function(){

     $(window).scroll(function () {
            if ($(this).scrollTop() > 670 ) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
		
		$('a.page-scroll').smoothScroll();

});


//quotes
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 5000,
  });
});

