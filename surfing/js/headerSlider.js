$(document).ready(function(){

    /*header slider */


var headerSlaider = $('#header-slider');
headerSlaider.on('initialized.owl.carousel', function(event) {
    
    $('.slides__controls_numbers-active').text(event.item.index + 1)
    $('.slides__controls_number-total').text(event.item.count)
})
	headerSlaider.owlCarousel({
  	items:1,
  	loop:false,
  	dots:false,
  	smartSpeed:2000,
  	margin:15
  });

// Go to the next item
$('#headerSliderRight').click(function() {
    headerSlaider.trigger('next.owl.carousel');
})
// Go to the previous item
$('#headerSliderLeft').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    headerSlaider.trigger('prev.owl.carousel');
})

	headerSlaider.on('changed.owl.carousel', function(event) {
    
    $('.slides__controls_numbers-active').text(event.item.index + 1)
    $('.slides__controls_number-total').text(event.item.count)
})

});