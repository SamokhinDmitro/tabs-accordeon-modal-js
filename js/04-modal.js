//Универсальное решнеие для работы с модальными окнами

const modalBtn = document.querySelectorAll('[data-modal-button]');
const modalClose = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalBtn.forEach(function(item) {
   item.addEventListener('click', function(){
       const modalId = this.dataset.modalButton;
       const modal = document.querySelector('#' + modalId);
       modal.classList.remove('hidden');

       modal.querySelector('.modal-window').addEventListener('click', e => {
           e.stopPropagation();
       });
   });
});

//Close modal
modalClose.forEach(item => {
   item.addEventListener('click', () => {
      const modal = item.closest('[data-modal]');
      modal.classList.add('hidden');
   });
});

//Клик по модальному окну
allModals.forEach(item => {
   item.addEventListener('click', function(){
       item.classList.add('hidden');
   });
});
