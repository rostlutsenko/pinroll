var burger = document.getElementsByClassName('burger');

burger[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName('menu');
    var links = document.getElementsByClassName('links');
   
    if (menu[0].style.opacity == '0'){
        
        menu[0].style.opacity = '';
        menu[1].style.transform = '';
        menu[1].style.background = '';
        menu[2].style.transform = '';
        menu[2].style.background = '';
        menu[3].style.opacity = '';
        links[0].classList.remove('active');
        document.body.style.overflow = '';
    } else {
        menu[0].style.opacity = '0';
        menu[1].style.transform = 'rotate(45deg)';
        menu[1].style.background = '#fff';
        menu[2].style.transform = 'rotate(-45deg)';
        menu[2].style.background = '#fff';
        menu[3].style.opacity = '0';
        links[0].classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});
