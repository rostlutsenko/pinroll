var burger = document.getElementsByClassName('burger');

burger[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName('menu');
   
    if (menu[0].style.opacity == '0'){
        
        menu[0].style.opacity = '';
        menu[1].style.transform = '';
        menu[2].style.transform = '';
        menu[3].style.opacity = '';
        
    } else {
        
        menu[0].style.opacity = '0';
        menu[1].style.transform = 'rotate(45deg)';
        menu[2].style.transform = 'rotate(-45deg)';
        menu[3].style.opacity = '0';
    }
});