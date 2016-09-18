function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.myBar');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation 
        $elem.addClass("start");
        for (var i = 0; i < $elem.length; i++) {
            move($elem[i]);
        }
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

function move(elem) { 
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
        console.log(elem.dataset.progress);
    if (width >= elem.dataset.progress) {
        clearInterval(id);
    } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.childNodes[1].innerHTML = width * 1  + '%';
    }
  }
}
