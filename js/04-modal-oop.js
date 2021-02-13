//Modal --OOP-ES6

class Modal{
    constructor() {
    }

    showModal(selector){
        const modal = document.querySelector(selector);
        modal.classList.remove('hidden');
        this.closeModal(modal);

        //Закрытие модального окна по клику на модалке
        modal.addEventListener('click', function(){
           modal.classList.add('hidden');
        });


        modal.querySelector('.modal-window').addEventListener('click', e => {
            e.stopPropagation();
        });
    }

    //Закрытие модального окна по кнопке Закрыть
    closeModal(modal){
        const modalClose = modal.querySelector('[data-modal-close]');
        modalClose.addEventListener('click', function(){
           const modalWrap = this.closest('[data-modal]');
           modalWrap.classList.add('hidden');
        });
    }


}
