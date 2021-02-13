
const tabs = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
   tab.addEventListener('click', () => {
       tabsHidden();
        const tabContent = document.querySelector('#' + tab.dataset.tab);
        tabContent.classList.remove('hidden');
   });
});


//Скрываем все табы
function tabsHidden(){
    contentBoxes.forEach(item => {
       item.classList.add('hidden');
    });
}

