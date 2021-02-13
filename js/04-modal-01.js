//Работа с одним модальным окном
const btnOpen = document.querySelector('button');
const modal = document.querySelector('[data-modal]');
const closeBtn = modal.querySelector('[data-modal-close]');


btnOpen.addEventListener('click', function(){
    modal.classList.remove('hidden');
});

//Закрытие модального окна по кнопке
closeBtn.addEventListener('click', function(){
    modal.classList.add('hidden');
});


modal.addEventListener('click', e => {
    modal.classList.add('hidden');
});

modal.querySelector('.modal-window').addEventListener('click', event => {
    event.stopPropagation();
});
