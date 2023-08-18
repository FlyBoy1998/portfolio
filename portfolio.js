// Select DOM elements
const lightModeBtn = document.querySelector('.fa-sun');
const navBar = document.querySelector('.header-hero');
const rightNavbar = document.querySelector('.right-navbar');
const navLinks = document.querySelectorAll('.nav-link');
const displayEmailBtn = document.querySelector('.floating-icon-3');
const emailAddress = document.querySelector('.email-address');
const heroPage = document.querySelector('.container-hero');
const heroMain = document.querySelector('.main-hero');
const heroPicture = document.querySelector('.photo-container');
const returnToTopBtn = document.querySelector('.top-page-btn');
const skillsSection = document.getElementById('skills');
const skillsSectionPicture = document.querySelector('.skills-coding-image');
const aboutSection = document.getElementById('about');
const aboutContainer = document.querySelector('.about-container');
const aboutDescription = document.querySelector('.about-description');
const aboutBtn = document.getElementById('about-btn');
const closeAboutBtn = document.querySelector('.close-about-btn');
const menuIcon = document.querySelector('.menu-icon-container');

const form = document.getElementsByTagName('form');
const textArea = document.getElementById('user-message');
const userMessageLength = document.querySelector('.user-message-length');



// Mobile Media Query
const mobileMedia = window.matchMedia('screen and (max-width: 480px)');

// Adjust content depending on resize
function adjustContent() {
    if(mobileMedia.matches) {
        heroPicture.style.display = 'none';
        skillsSectionPicture.style.display = 'none';
        rightNavbar.style.display = 'none';
        menuIcon.classList.remove('change-menu-icon');
    } else {
        heroPicture.style.display = 'flex';
        skillsSectionPicture.style.display = 'block';
        rightNavbar.style.display = 'flex';
    }
}

// Display Menu for Mobile
function displayMenu () {
    menuIcon.classList.toggle('change-menu-icon');
    if(menuIcon.classList.contains('change-menu-icon')) {
        rightNavbar.style.display = 'flex';
    } else {
        rightNavbar.style.display = 'none';
    }
    if(!mobileMedia.matches) {
        rightNavbar.style.display = 'flex';
    }
}

// Close nav on mobile when click on nav link
navLinks.forEach((link) => {
    link.addEventListener('click', () => displayMenu())
})

// Dark/Light Mode Switch
function lightModeSwitch () {
    if(lightModeBtn.classList.contains('fa-sun')) {
        lightModeBtn.classList.replace('fa-sun', 'fa-moon');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        lightModeBtn.classList.replace('fa-moon', 'fa-sun');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Open About Section
function openAboutSection () {
    aboutSection.classList.remove('about-hidden');
    aboutDescription.classList.remove('about-hidden');
    document.body.style.overflowY = 'hidden';
}

// Close About Section
function closeAboutSection () {
    aboutSection.classList.add('about-hidden');
    aboutDescription.classList.add('about-hidden');
    document.body.style.overflowY = 'scroll';
    if(!mobileMedia.matches) {
        rightNavbar.style.display = 'flex';
    }
}

// Show Email Address
displayEmailBtn.addEventListener('click', () => emailAddress.classList.toggle('email-address-visible'));

// Show return to top button
function displayReturnToTopBtn () {
    if(window.scrollY > heroPage.offsetHeight / 2) {
        returnToTopBtn.classList.add('visible');
    } else {
        returnToTopBtn.classList.remove('visible');
    }
}

// Set value for user message size;
function setUserMessageLength() {
    userMessageLength.textContent = textArea.textLength;
    if(textArea.textLength === 250) {
        textArea.style.border = '1px solid #66fcf1';
    } else {
        textArea.style.border = '1px solid #808080';
    }
}

// Set light mode on load based on local storage
function setLightMode() {
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    if(currentTheme === 'light') {
        lightModeBtn.classList.replace('fa-sun', 'fa-moon');
    }
} 


// Event Listeners
window.addEventListener('scroll', displayReturnToTopBtn);
window.addEventListener('resize', adjustContent);
aboutBtn.addEventListener('click', openAboutSection);
closeAboutBtn.addEventListener('click', closeAboutSection);
lightModeBtn.addEventListener('click', lightModeSwitch);
menuIcon.addEventListener('click', displayMenu);
textArea.addEventListener('keyup', setUserMessageLength);



// On load
adjustContent();
setLightMode();


