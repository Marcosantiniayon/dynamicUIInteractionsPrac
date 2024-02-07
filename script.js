const overlay = document.querySelector('.overlay')
const openMenu2 = document.querySelector('.openMenu2')
const closeMenu2 = document.querySelector('.closeMenu2')
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const selected = document.querySelector('.selected');

const eventlisteners = function () {
    select.addEventListener('click', function () {
        console.log('select clicked');
        menu.classList.toggle('menu-open');
        caret.classList.toggle('caret-rotate');
    });

    openMenu2.addEventListener('click', function () {
        open2ndMenu();
    });

    closeMenu2.addEventListener('click', function () {
        close2ndMenu();
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
            close2ndMenu();
        });
    });

    window.addEventListener('resize', mediaJSQuery);
}; eventlisteners();


function open2ndMenu() {
    openMenu2.style.display = 'none';
    closeMenu2.style.display = 'block';
    overlay.style.display = 'block';
    menu.classList.add('menu2');
    menu.classList.remove('menu1');
    menu.classList.add('menu-open');
}

function close2ndMenu() {
    closeMenu2.style.display = 'none';
    openMenu2.style.display = 'block';
    overlay.style.display = 'none';
    menu.classList.remove('menu2');
    menu.classList.add('menu1');
    menu.classList.remove('menu-open');
}

function mediaJSQuery() {
    // Check the viewport width
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (vw >= 600) {
        close2ndMenu();
    }
}





