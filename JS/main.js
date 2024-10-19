//              ---- TIMEOUT_TIMER ----
function countdown()
{
    let seconds = document.getElementById( "seconds" ).value;

    // declare the "tick" function
    function tick()
    {
        seconds -= - 1;

        timer.innerHTML = seconds;

        let time = setTimeout( tick, 1000 );

        if ( seconds == -1 )
        {
            alert( "Time is Up!" );
            clearTimeout( time );
            timer.innerHTML = "";
        }
    }
    tick();
}
//              ---- END_TIMEOUT_TIMER ----



//              ---- SLIDESHOW_Assignment ----
let slideIndex = 1;
// Displays the slideIndex
showSlides( slideIndex );

// currentSlides() Function: Manages Next/Previous controls
function plusSlides( n )
{
    showSlides( slideIndex += n );
}


function currentSlide( n )
{
    showSlides( slideIndex = n );
}

function showSlides( n )
{
    // Index
    let i;

    let slides = document.getElementsByClassName( "mySlides" );
    let dots = document.getElementsByClassName( "demo" );
    let captionText = document.getElementById( "caption" );

    /**
     * When the cursor hits the last image (>> Cursor image) in the slide.
     * Upon clicking on the next cursor (>>), it throws out of bounds 
     */
    if ( n > slides.length )
    {
        slideIndex = 1;
    }
    if ( n < 1 )
    {
        slideIndex = slides.length;
    }

    // Throws the images Vertically on the screen. 
    for ( i = 0; i < slides.length; i++ )
    {
        slides[ i ].style.display = "none";
    }
    for ( i = 0; i < dots.length; i++ )
    {
        dots[ i ].className = dots[ i ].className.replace( " active", "" );
    }

    slides[ slideIndex-1 ].style.display = "block";
    dots[ slideIndex-1 ].className += " active";
    captionText.innerHTML = dots[ slideIndex-1 ].alt;

}


