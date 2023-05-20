(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    var wow = new WOW(
        {
            boxClass: 'wowload',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }
    );
    wow.init();
})(jQuery);
