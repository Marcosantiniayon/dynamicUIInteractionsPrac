const overlay = document.querySelector('.overlay')
const openMenu2 = document.querySelector('.openMenu2')
const closeMenu2 = document.querySelector('.closeMenu2')
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menu li');
const selected = document.querySelector('.selected');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const carousel = document.querySelectorAll('.carouselImg');
const navigationBars = document.querySelectorAll('.bar');


const carouselControl = (function () {
    let currentIndex = 0;
    showImg();

    function barImg(index) {
        currentIndex = index;
        showImg();
    }

    function showImg() {
        carousel.forEach((img, i) => {
            if (i !== currentIndex) {
                img.classList.remove('activeImg');
            } else {
                img.classList.add('activeImg');
            }
        });
        setTimeout(nextImg, 5000); // Change image every 5 seconds
    }

    function nextImg() {
        currentIndex = currentIndex + 1;
        if (currentIndex >= carousel.length) {
            currentIndex = 0; // Reset to first img when exceeding the maximum index
        }
        changeBar(currentIndex);
    }

    function prevImg() {
        currentIndex = currentIndex - 1;
        if (currentIndex < 0) {
            currentIndex = carousel.length - 1; // Reset to last img when index goes negative
        }
        changeBar(currentIndex);
    }

    function changeBar(currentIndex) {
        navigationBars.forEach((bar, index) => {
            if (currentIndex === index) {
                bar.classList.add('activeBar');
            } else {
                bar.classList.remove('activeBar');
            }
        });
        showImg();
    };

    return { barImg, nextImg, prevImg, changeBar };
})();

const eventlisteners = (function () {
    select.addEventListener('click', function () {
        console.log('select clicked');
        menu.classList.toggle('menu-open');
        caret.classList.toggle('caret-rotate');
    });

    openMenu2.addEventListener('click', open2ndMenu);

    closeMenu2.addEventListener('click',close2ndMenu);

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

    navigationBars.forEach((bar, index) => {
        bar.addEventListener('click', function () {
            // change index to selected bar
            carouselControl.barImg(index);
            console.log("Clicked on bar " + (index + 1));
            carouselControl.changeBar(index);
        })
    });

    rightArrow.addEventListener('click', carouselControl.nextImg);

    leftArrow.addEventListener('click', carouselControl.prevImg);

    window.addEventListener('resize', mediaJSQuery);

})();

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





