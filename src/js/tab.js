function tab(){//Главная функция табов
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');
    let tab = document.querySelectorAll('.info-header-tab');
    //ES6
    let hideTab = (a) =>{
        for(let i = a; i<tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            }
    }
    hideTab(1);

    let showTab = (b) =>{
        if (tabContent[b].classList.contains('hide')) {//если данный участок скрыт, то тогда он появляется
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event){
        let target = event.target;
        //использую делегирование события
        if (target && target.matches('.info-header-tab')){//должен попасть в меню табов и в конкретный таб
            for(let i = 0; tab.length; i++){
                if (tab[i] == target){
                    hideTab(0); //Удаляем всё
                    showTab(i); //показываем данный элемент
                    break;
                }
            }
        }
    });
}
module.exports = tab; 