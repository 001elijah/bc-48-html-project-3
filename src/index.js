var slideIndex = 1;

showSlides(slideIndex); 

function plusSlides(n) {

  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  var slides = document.getElementsByClassName("hero-img__item");


  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

  }

  slides[slideIndex-1].style.display = "block";

}

(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-open]"),
    openModalBtn: document.querySelector("[modal-open1]"),
    closeModalBtn: document.querySelector("[modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();