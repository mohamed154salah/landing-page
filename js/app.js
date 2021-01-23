/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
let sections = document.querySelectorAll("section");
sections.forEach(sec => {
    const li = document.createElement('li');
    const ul = document.querySelector('#navbar__list');
    ul.appendChild(li);
    const a = document.createElement("a");
    a.setAttribute("href", "#" + sec.getAttribute('id'));
    a.innerHTML = sec.getAttribute("data-nav");
    li.appendChild(a);


});
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navbar__menu a[href*=#]:not([href=#])').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar__menu ul li a').removeClass("active"); //added to remove active class from all a elements
            currLink.addClass("your-active-class");
        } else {
            currLink.removeClass("your-active-class");
        }
    });
}
// Scroll to section on link click

// Set sections as active