
const headerTitle = document.querySelectorAll("[data-name='accordeon-title']");

headerTitle.forEach(item => {
   item.addEventListener('click', () => {
       item.nextElementSibling.classList.toggle('hidden');
   });
});

//Закрыть все табы кроме одного
// function closeTabs(){
//     const tabs = document.querySelectorAll('.list-content');
//     tabs.forEach(tab => {
//        tab.classList.add('hidden');
//     });
// }
