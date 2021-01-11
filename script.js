$(document).ready(function(){

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();
                    
            // Store hash
            var hash = this.hash;

            // Let the navbar collapse in first (for 325ms) before scrolling to selected navbar-link
            setTimeout(function() {
                
                // Using jQuery's animate() method to add smooth page scroll
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }, 325)            
        }
    });
});

// Collapse navbar after onclick navbar-item
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Language selector
function changeLanguage() {
    var img1 = "icons/netherlands.svg";
    var img2 = "icons/united-kingdom.svg";
    
    var imgElement = document.getElementById('language');
 
    imgElement.src = (imgElement.src == img1)? img2 : img1;
}