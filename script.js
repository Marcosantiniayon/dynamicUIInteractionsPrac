const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const selected = document.querySelector('.selected');

select.addEventListener('click', function () {
    console.log('select clicked');

    menu.classList.toggle('menu-open');
    caret.classList.toggle('caret-rotate');
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


