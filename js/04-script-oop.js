
const modalBtn = document.querySelectorAll('[data-modal-button]');
const modal = new Modal();

modalBtn.forEach(function(item){
   item.addEventListener('click', function(){
      const modalId = this.dataset.modalButton;
      modal.showModal(`#${modalId}`);
   });
});

//Показ модального окна по таймеру
//setTimeout(() => modal.showModal('#modal-3'), 3000);
