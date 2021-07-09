  //Form Ajax
import regeneratorRuntime from "regenerator-runtime";
//import 'cross-fetch/polyfill';
function form(){
    let massage ={
       loading: "Загрузка...",
       succes: "Спасибо! Скоро мы с вами свяжемся!",
       failure: "Что-то пошло не так"
   };    

   let form = document.querySelector('.main-form'),
       inputsPopup = form.getElementsByTagName('input'),
       formFooter = document.getElementById('form'),
       inputsFooter = formFooter.getElementsByTagName('input'),
       statusMessage = document.createElement('div');

       statusMessage.classList.add('status');
       function inputClear(inputs){//очистка input
           for(let i=0;i<inputs.length; i++ ){
               inputs[i].value ='';
            }
       }
       function checkNumber(number){
           let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
           return reg.test(number);
       }
       function wrap(myForm){
           myForm.addEventListener('submit', formSend);//для верхней формы
               async function formSend(event){//создаём асинхронную функцию, которая возвращает promise
               event.preventDefault();
               myForm.appendChild(statusMessage);
               let number;    
               if (myForm == form){
                   number = inputsPopup[0].value;
                  
               }
               else{
                   number = inputsFooter[1].value;
                   
               }
               
               if (checkNumber(number)){
                   let formData = new FormData(myForm);

                   let response = await fetch('server.php',{//создаю response(объект) который содержит запрос на сервер
                                           method: 'POST',
                                           body: formData
                                           });
                   if (response.ok && response.status == 200) {
                       
                       statusMessage.innerHTML = massage.succes;
                       inputClear(inputsPopup);
                   }
                   else if(response.ok){
                       statusMessage.innerHTML = massage.loading;
                       
                   }
                   else{
                       statusMessage.innerHTML = massage.failure;
                   }
           }
           else{
               statusMessage.innerHTML = 'Пожалуйста введите правильный номер!'
           }
       }
       }
       wrap(form);//верхняя форма
       //для нижней формы
       formFooter.addEventListener('click', function(event){//Удаляю оповещение
           let target = event.target;
           if (target && target.matches('input')){
               statusMessage.textContent='';
           }
       });
       inputClear(inputsFooter);
       wrap(formFooter);
       
      
  }
 form();
  