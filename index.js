//*****THEME**** */
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("darkmode");
    window.localStorage.setItem('portfolio-theme', 'darkmode')
    
}
var icon = document.getElementById("light");

icon.onclick = function() {
    document.body.classList.remove("darkmode");
    window.localStorage.setItem('portfolio-theme', '')
}

const bodyClass = window.localStorage.getItem('portfolio-theme');
document.body.className = bodyClass;


//*****FLOATING NAV ******

const floatingNavs = document.querySelectorAll('.floating__nav a')

const removeActiveClass= () => {
    floatingNavs.forEach(nav => {
        nav.classList.remove('active')
    })
}

floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        removeActiveClass();
        nav.classList.add('active')
    })
})

//*****RESUME ******
const resumeRight = document.querySelector('.resume__right');


var eperienceBtn = document.getElementById("experience");
var educationBtn = document.getElementById("education");
var skillsBtn = document.getElementById("skills");
var aboutBtn = document.getElementById("about");

eperienceBtn.onclick = function() {
 eperienceBtn.classList.add('primary')
 educationBtn.classList.remove('primary')
 skillsBtn.classList.remove('primary')
 aboutBtn.classList.remove('primary')
}
educationBtn.onclick = function() {
 educationBtn.classList.add('primary')
 eperienceBtn.classList.remove('primary')
 skillsBtn.classList.remove('primary')
 aboutBtn.classList.remove('primary')
}
skillsBtn.onclick = function() {
 skillsBtn.classList.add('primary')
 educationBtn.classList.remove('primary')
 eperienceBtn.classList.remove('primary')
 aboutBtn.classList.remove('primary')
}
aboutBtn.onclick = function() {
 aboutBtn.classList.add('primary')
 educationBtn.classList.remove('primary')
 eperienceBtn.classList.remove('primary')
 skillsBtn.classList.remove('primary')
 }

 //*****MIXITUP**** */
var products = document.querySelector('.projects__container');
var mixer = mixitup(products);
var allBtn = document.getElementById("all");
var frontendBtn = document.getElementById("frontend");
var backendBtn = document.getElementById("backend");
var fullstackBtn = document.getElementById("fullstack");

allBtn.onclick = function() {
     allBtn.classList.add('primary')
     frontendBtn.classList.remove('primary')
     backendBtn.classList.remove('primary')
     fullstackBtn.classList.remove('primary')
}
frontendBtn.onclick = function() {
 frontendBtn.classList.add('primary')
     allBtn.classList.remove('primary')
     backendBtn.classList.remove('primary')
     fullstackBtn.classList.remove('primary')
}
backendBtn.onclick = function() {
 backendBtn.classList.add('primary')
     allBtn.classList.remove('primary')
     frontendBtn.classList.remove('primary')
     fullstackBtn.classList.remove('primary')
}
fullstackBtn.onclick = function() {
 fullstackBtn.classList.add('primary')
     allBtn.classList.remove('primary')
     backendBtn.classList.remove('primary')
     frontendBtn.classList.remove('primary')
 }

 //*****SWIPER**** */

 const swiper = new Swiper('.swiper', { 
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        }, 1024: {
            slidesPerView: 3
        }
    }

   });


 //*****FAQS**** */
 const faqs = document.querySelectorAll('.faqs__item');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const p = faq.querySelector('p');
            const icon = faq.querySelector('.faq__icon')
            if(p.classList.contains('show')) {
                p.classList.remove('show')
                icon.innerHTML = '<i class="uil uil-angle-down"></i>'
            } else {
                p.classList.add('show')
                icon.innerHTML = '<i class="uil uil-angle-up"></i>'
            }
        })
    })

/*const resumeRight = document.querySelector('.resume__right')

const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTMl = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add(',primary')
    
    aboutBtn.classList.remove('primary')
    skillsBtn.Right.innerHTML = skillsContent;
    resumeRight.className = 'resume_right skills'
    skillsBtn.classList.add("primary")

    aboutBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
})

//const aboutContent = 

const aboutBtn = document.querySelector('.about__btn')
aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = "resume__right about"
    aboutBtn.classList.add("primary")

    skillsBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
    expericlassList.remove('primary')
    educationBtn.classList.remove('primary')
})

resumeRight.innerHTMl = experienceContent;

//education
const educationBtn = document.querySelector('.education__btn')

//const educationContent = 
educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.classList.add('education')
    educationBtn.classList.add('primary')

    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
})

//skills
//const skillsContent = 

const skillsBtn = document.querySelector('.skills__btn')
skillsBtn.addEventlistener('click', () =>{
    resumeenceBtn.classList.remove('primary')
})*/


