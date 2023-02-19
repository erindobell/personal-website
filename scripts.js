// Project overlays

function projectDisplay() {

  if (document.querySelector('.project')) {
    let projects = document.querySelectorAll('.project')

    for (let i = 0; i < projects.length; i++) {
      let thumbnail = projects[i].querySelector('.project-thumbnail')
      let close = projects[i].querySelector('.close-overlay')

      thumbnail.addEventListener('click', function() {
      this.parentElement.id = 'active'
      })

      close.addEventListener('click', function() {
        document.querySelector('#active').id = ''
      })
    }
  }
}

projectDisplay()

// Project Slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}