const overlay = document.querySelector('.overlay')
const openMenu2 = document.querySelector('.openMenu2')
const closeMenu2 = document.querySelector('.closeMenu2')
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.menu2');
const options = document.querySelectorAll('.menu li');
const options2 = document.querySelectorAll('.menu2 li');
const selected = document.querySelector('.selected');

select.addEventListener('click', function () {
    console.log('select clicked');
    menu.classList.toggle('menu-open');
    caret.classList.toggle('caret-rotate');
});

openMenu2.addEventListener('click', function () {
    console.log('open clicked');
    openMenu2.style.display = 'none';
    closeMenu2.style.display = 'block';
    overlay.style.display = 'block';
    menu.classList.add('menu2');
    menu.classList.add('menu-open');
});

closeMenu2.addEventListener('click', function () {
    console.log('open clicked');
    closeMenu2.style.display = 'none';
    openMenu2.style.display = 'block';
    overlay.style.display = 'none';
    menu.classList.remove('menu2');
    menu.classList.remove('menu-open');

});


options.forEach(option => {
    option.addEventListener('click', function () {
        console.log(option.innerHTML + ' clicked');
        menu.classList.toggle('menu-open');
        caret.classList.toggle('caret-rotate');
        selected.innerHTML = option.innerHTML;   
        options.forEach(option => {
            option.classList.remove('active');
        });

        option.classList.add('active');
    });
});




