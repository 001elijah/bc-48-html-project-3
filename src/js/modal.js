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