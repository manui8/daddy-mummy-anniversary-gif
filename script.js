```javascript
const intro = document.getElementById("intro");
const slideshow = document.getElementById("slideshow");
const letterScreen = document.getElementById("letterScreen");

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const replay = document.getElementById("replay");

const photos = document.querySelectorAll(".photo");

let currentPhoto = 0;
let slideTimer;


/* =========================================
   START ANIMATION
========================================= */

function startExperience(){

    clearInterval(slideTimer);

    currentPhoto = 0;

    // Reset everything
    paper.classList.remove("show");
    envelope.classList.remove("open");

    replay.style.display = "none";

    slideshow.style.display = "none";
    letterScreen.style.display = "none";

    intro.style.display = "flex";
    intro.style.opacity = "1";


    // Show animated family for 4 seconds
    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            slideshow.style.display = "flex";

            startSlideshow();

        },1000);

    },4000);
}


/* =========================================
   PHOTO SLIDESHOW
========================================= */

function startSlideshow(){

    currentPhoto = 0;

    photos.forEach(photo => {
        photo.classList.remove("active");
    });

    // First photo
    photos[0].classList.add("active");


    slideTimer = setInterval(() => {

        // Hide current photo
        photos[currentPhoto].classList.remove("active");

        currentPhoto++;


        // All 3 photos completed
        if(currentPhoto >= photos.length){

            clearInterval(slideTimer);

            setTimeout(() => {

                slideshow.style.display = "none";

                letterScreen.style.display = "flex";

            },1000);

            return;
        }


        // Show next photo
        photos[currentPhoto].classList.add("active");

    },3000);
}


/* =========================================
   OPEN ENVELOPE
========================================= */

envelope.addEventListener("click", () => {

    envelope.classList.add("open");


    setTimeout(() => {

        paper.classList.add("show");

        replay.style.display = "block";

    },900);

});


/* =========================================
   REPLAY BUTTON
========================================= */

replay.addEventListener("click", () => {

    startExperience();

});


/* =========================================
   START WHEN PAGE LOADS
========================================= */

window.addEventListener("load", () => {

    startExperience();

});
```
