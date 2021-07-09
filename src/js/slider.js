//Слайдер tiny    
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
module.exports = slider;
