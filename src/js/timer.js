function timer(){ //Таймер
    let deadline = '2021-06-30';
    let timer = 1000000;//Сколько до дедлайна

    let getTimeRamaining = (endtime) =>{//вычисляем сколько времени осталось до deadline
            timer = timer - 1000;
            let t = /*Date.parse(endtime)*/Date.parse(new Date()) + timer - Date.parse(new Date()),//разница между датами
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60 ),
            hours = Math.floor((t/1000/60/60));
            return{//Функция возвращает объект!!!
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }
    let setClock = (id, endtime) => {
        let timer = document.querySelector(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            second = timer.querySelector('.seconds'),
            timeinterval = setInterval(updateClock,1000);//запускаю функцию через каждую секунду
        
        function updateClock(){
            let t = getTimeRamaining(endtime),
                hoursStr = String(t.hours),
                minutesStr = String(t.minutes),
                secondsStr = String(t.seconds);
                if (hoursStr.length == 1) hours.textContent = '0' + t.hours;
                else hours.textContent = t.hours;
                if (minutesStr.length == 1) minutes.textContent = '0' + t.minutes;
                else minutes.textContent = t.minutes;
                if (secondsStr.length == 1) second.textContent = '0' + t.seconds;
                else second.textContent = t.seconds;
                if (t.total <= 0) {
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    second.textContent = '00';
                    clearInterval(timeinterval);//когда время истекло останавливаем работу функции
                }
        }    
    }
    setClock('#timer', deadline);
}
module.exports = timer;