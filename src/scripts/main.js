window.onload = function() {
    startMenu();
};

function startMenu() {
    let section = document.querySelectorAll("section", "footer");
    let sections = {};
    let i = 0;
    
    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });
    
    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        scrollPosition += 52;
    
        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.--active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', '--active');
            }
        }
    };

    let scroll = window.scrollY;
    const nav = document.querySelector("#nav-menu");
    const nav__height = nav.offsetHeight;

    window.addEventListener('scroll', function() {
        scroll = window.scrollY;
        
        if (scroll >= nav__height) {
            nav.classList.add("--colorful")
        } else {
            nav.classList.remove("--colorful")
        }
    })
}

// function startCarousel() {
//     let carousel = document.querySelector('.carousel');
//     let container = carousel.querySelector('.carousel__container');
//     let prevBtn = carousel.querySelector('.carousel__prev');
//     let nextBtn = carousel.querySelector('.carousel__next');
//     let pagination = carousel.querySelector('.carousel__pagination');
//     let bullets = [].slice.call(carousel.querySelectorAll('.carousel__bullet'));
//     let totalItems = container.querySelectorAll('.carousel__item').length;
//     let percent = (100 / totalItems);
//     let currentIndex = 0;

//     function next() {
//         slideTo(currentIndex + 1);
//     }

//     function prev() {
//         slideTo(currentIndex - 1);
//     }

//     function slideTo(index) {
//         index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
//         container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
//         bullets[currentIndex].classList.remove('active__bullet');
//         bullets[index].classList.add('active__bullet');
//         currentIndex = index;
//     }

//     bullets[currentIndex].classList.add('active__bullet');
//     prevBtn.addEventListener('click', prev, false);
//     nextBtn.addEventListener('click', next, false);

//     pagination.addEventListener('click', function(e) {
//         let index = bullets.indexOf(e.target);
//         if (index !== -1 && index !== currentIndex) {
//             slideTo(index);
//         }
//     }, false);
// };