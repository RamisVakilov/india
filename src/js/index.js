//import 'core-js/features/promise'; 
import 'element-matches-polyfill';
import calc from './calc'
import modal from './modal'
import scrolling from './scrol'
import  {tns}  from "../../node_modules/tiny-slider/src/tiny-slider.js";
import tab from './tab'
import timer from './timer'
import "scroll-behavior-polyfill"
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
//Настройка слайдера
function slider(){
    let slider = tns({
        container: '.slider .wrap',
        items: 1,
        slideBy: 1,
        autoplay: false,
        controls: false,
        navPosition: 'bottom',
        center: true,
        swipeAngle:true,
        navAsThumbnails:true,
        speed:300
     });

      let prev = document.querySelector('.prev');
      let next = document.querySelector('.next');

      prev.addEventListener('click', function(){
          slider.goTo('prev');
      });
      next.addEventListener('click', function(){
        slider.goTo('next');
    });

    if (screen.width < 768) {//удаляю стрелки при данном разрешении экрана
        prev.style.display = "none";
        next.style.display = "none";
    }
    window.addEventListener('resize', function(){//если экран динамически изменяется
        if (screen.width < 768) {
            prev.style.display = "none";
            next.style.display = "none";
        }
        if (screen.width > 767) {
            prev.style.display = "block";
            next.style.display = "block";
        } 
    });
}
window.addEventListener('DOMContentLoaded', function(){
    "use strict";
    calc();
    modal();
    scrolling();
    slider();
    tab();
    timer();
})    