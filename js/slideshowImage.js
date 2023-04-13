const slideshowImages = document.querySelectorAll('.intro .slideshow-img');

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  // slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages[currentImageCounter].style.zIndex = -2;
  const tempCounter = currentImageCounter
  setTimeout(() => {
    slideshowImages[currentImageCounter].style.opacity = 0;
  }, 1000);

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}
function LoopTest() {
  var i = 0;
  var stop = 5;
  for (i = 0; i < 5; i++) {
    document.getElementsByClassName("intro-slideshow").innerHTML += "<button>button</button>"
  }
}