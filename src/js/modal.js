function modal(){//Modal  windows
    let btn = document.querySelector('button'),
    btnTab = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');
    
   
    function showModal(){//Появление модального окна
        overlay.style.display = 'block';
        document.body.style.overflow = "hidden";
        this.classList.add('more-splash');//для того, чтобы применить к любой кнопке, этот класс дабовляет анимацию к кнопке
    }
    btn.addEventListener('click', function(){
        showModal.call(btn);//понял. Он просто подставлет вместо this искомую кнопку в функции showModal
        
    });

   btnTab.forEach(function(item){
       item.addEventListener('click', function(){
          showModal.call(item);//Он просто подставлет вместо this искомую кнопку в функции showModal
          
       });
   });

    close.addEventListener('click', function (){
        let statusMessage = document.querySelector('.status');
        let inputVal = document.querySelector('.popup-form__input');
        
        if (statusMessage != undefined){
            statusMessage.textContent='';//очищаю строку состояния
            inputVal.value = '';//очистил input
        }
        
        function removeOverlay(){//исчезновение элемента
            overlay.classList.remove('modalHide');//плавно исчезает
            overlay.style.display = 'none'
        }
         setTimeout(()=>
                (
                 removeOverlay()
                ),         
             1500);
        overlay.classList.add('modalHide');
        btn.classList.remove('more-splash');
        btnTab.forEach(function(item){
            item.classList.remove('more-splash');
        });
        document.body.style.overflow = "";
        
        
    });
} 
module.exports = modal;