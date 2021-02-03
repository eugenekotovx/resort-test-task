const slides = document.getElementsByClassName("js-features-slide__item");
const dots = document.getElementsByClassName("js-navigation-slider__dot");
const arrowLeft = document.querySelector(".js-features-arrow--left");
const arrowRight = document.querySelector(".js-features-arrow--right");

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(
      " navigation-slider__dot--active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " navigation-slider__dot--active";
}

window.addEventListener("load", () => {
  arrowLeft.addEventListener("click", () => {
    plusSlides(-1)
  })
  arrowRight.addEventListener('click', () => {
    plusSlides(1)
  })
});
