const buttonMainToggle = document.querySelector('.main-icon-action');
const navList = document.querySelector('.navlist');

navList.style.display = 'none';


function mainToggle(){
    if (navList.style.display == 'none') {
        navList.style.display = 'flex';
    }else {
        navList.style.display = 'none';
    }
    
};

const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true,
});

sr.reveal('.dev-img', { delay: 400 })
sr.reveal('.curriculum-text', { delay: 600 })
sr.reveal('.networks-wrapper', { delay: 800, origin: 'left' })
sr.reveal('.scroll-down', { delay: 800, origin: 'top' })

