$(document).ready(function(){

var shopSlider = $('#shop-slider');

 shopSlider.owlCarousel({
  
  	loop:true,
  	dots:false,
  	smartSpeed:500,
    responsive:{

      0: {
          items:1,
      },

      1254: {
        items:3,
      }
    }
  });

$('#shop-slider-right').click(function() {
    shopSlider.trigger('next.owl.carousel');
})
// Go to the previous item
$('#shop-slider-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    shopSlider.trigger('prev.owl.carousel');
})

	});