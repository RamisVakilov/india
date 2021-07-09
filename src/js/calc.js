 function calc(){
    function inputClear(inputs){//очистка input
        for(let i=0;i<inputs.length; i++ ){
            inputs[i].value ='';
         }
    }
      //Расчет путёвки(калькулятор) 
        let selectBase = document.getElementById('select'),
            number = document.querySelectorAll('.counter-block-input'),
            total = document.getElementById('total');
        
        inputClear(number);
        selectBase.addEventListener('change', function(){
            total.textContent = (+number[0].value) * (+number[1].value) * (+selectBase.value) * 1000;
        });
        number.forEach(function(item){
                item.addEventListener('input', function(){
                    if (number[0].value > 10) number[0].value = '';
                    else if (number[0].value < 1)  number[0].value = '';
                    if (number[1].value > 30) number[1].value = '';
                    else if (number[1].value < 1)  number[1].value = '';
                    total.textContent = Math.round((+number[0].value) * (+number[1].value) * (+selectBase.value) * 1000);
                });
        });
 }
 module.exports = calc;