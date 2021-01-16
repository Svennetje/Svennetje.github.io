// Var that checks if getting runned on phone
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// Function that adds smooth scrolling to links
$(document).ready(function(){

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();
                    
            // Store hash
            var hash = this.hash;

            // If device is a mobile
            if (isMobile.any()) {

                // Let the navbar collapse in first (for 325ms) before scrolling to selected navbar-link
                setTimeout(function() {
                    
                    // Using jQuery's animate() method to add smooth page scroll
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                }, 325)  
            } 

            // If device is not a mobile
            else {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }         
        }
    });
});

// Function that adds scrollify for landing page
$(document).ready(function(){
    $.scrollify({
        section: "section",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
    $(function() {
        $.scrollify({
            section : ".slide",
        });
    });  
});

// Collapse navbar after onclick navbar-item
// $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
//     $('#nav-icon').toggleClass('open');
// });

// $(document).ready(function(){
// 	$('#nav-icon').click(function(){
// 		$('#nav-icon').toggleClass('open');
// 	});
// });