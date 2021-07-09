//плавный скрол по странице сайта
function scrolling(){
    let nav = document.querySelectorAll('nav ul li a'),
    //элементы меню
    about = document.getElementById('about'),
    photo = document.getElementById('photo'),
    price = document.getElementById('price'),
    contacts = document.getElementById('contacts');
         
    nav[0].addEventListener('click',function(e){
        window.scroll({
            top: about.offsetTop-60,
            behavior:'smooth'//плавный скролл
        });
    });
    nav[1].addEventListener('click',function(e){
        
        window.scroll({
            top: photo.offsetTop-60,
            behavior:'smooth'
        });
        
    });
    nav[2].addEventListener('click',function(e){
       
        window.scroll({
            top: price.offsetTop-60,
            behavior:'smooth'
        });
    });
    nav[3].addEventListener('click',function(e){
       
        window.scroll({
            top: contacts.offsetTop-60,
            behavior:'smooth'
        });
    });
}
module.exports = scrolling;