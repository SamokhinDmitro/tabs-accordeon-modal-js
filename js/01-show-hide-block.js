const btn = document.querySelector('#button');
const content = document.querySelector('#content');

btn.addEventListener('click', () => {

   /*
    content.classList.toggle('hidden');

    if(content.classList.contains('hidden')){
        btn.textContent = 'Открыть блок';
    }else{
        btn.textContent = 'Закрыть блок';
    }
    */

    //2способ

    if(content.classList.toggle('hidden')){
        btn.textContent = 'Открыть блок';
    }else{
        btn.textContent = 'Закрыть блок';
    }
});
