(function($) {
    'use strict';

    jQuery(document).ready(function() {

        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });	

        $('.work-inner').mixItUp();

    });

})(jQuery);