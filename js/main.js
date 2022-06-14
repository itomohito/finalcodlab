jQuery(document).ready(function($) {

	'use strict';
      
      $('#form-submit .date').datepicker({
      });


      var owl = $("#owl-testimonial");

        owl.owlCarousel({

          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000,
          items : 1,
          itemsDesktop : [1000,1],
          itemsDesktopSmall : [900,1],
          itemsTablet: [600,1],
          itemsMobile : false

      });


        














	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });



});
