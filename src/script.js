window.addEventListener('DOMContentLoaded', function(){
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
    
     "use strict";

    let scrolling = require('./js/scrol');
    let calc = require('./js/calc');
    let tab = require('./js/tab');
    let timer = require('./js/timer');
    let modal = require('./js/modal');
   //let form = require('./js/form');   
    let slider = require('./js/slider');
         
        
        tab();
        timer();
        modal();
        calc();
    scrolling();
        slider();
       //form();
     
  });
