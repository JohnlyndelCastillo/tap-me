
  const openBtn = document.querySelector("[data-modal-toggle='static-modal']");
  const modal = document.getElementById("static-modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtns = modal.querySelectorAll("[data-modal-hide='static-modal']");

  function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    setTimeout(() => {
      modalContent.classList.remove("scale-95", "opacity-0");
      modalContent.classList.add("scale-100", "opacity-100");
    }, 20); // delay so transition applies
  }

  function closeModal() {
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }, 300); // matches transition duration
  }

  openBtn.addEventListener("click", openModal);
  closeBtns.forEach(btn => btn.addEventListener("click", closeModal));

