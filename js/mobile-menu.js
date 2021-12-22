(() => {
    const menuBtnRef = document.querySelector("[data-burger-btn]");
    const mobileMenuRef = document.querySelector("[data-menu-container]");

    const body = document.getElementsByTagName("body")[0];

    menuBtnRef.addEventListener("click", () => {

        body.classList.toggle("modal-open");

        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
    
        menuBtnRef.classList.toggle("is-opened");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-opened");

    });

//      window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-opened');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();