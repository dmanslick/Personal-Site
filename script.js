tailwind.config = {
    theme: {
    extend: {
        colors: {
        dhruvLighter: '#6692CE',
        dhruvLight: '#3961C9',
        dhruv: '#004aad',
        dhruvDark: '#003B8A',
        dhruvDarker: '#002C68',
        },
        screens: {
            xs: '412px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1400px'
        }
    }
    }
}

const navBtn = document.getElementById('nav-btn')
const navItems = document.getElementById('nav-items')
const navHeader = document.getElementById('nav-header')
const nav = document.querySelector('nav')
const navMd = document.getElementById('nav-md')
const navMdTitle = document.getElementById('nav-md-title')
navItems.style.display = 'none'

navBtn.addEventListener('click', ()=> {
    if (navItems.style.display == 'none') {
        navItems.style.display = 'flex'
        navItems.setAttribute('aria-expanded', 'true')
        navItems.setAttribute('aria-hidden', 'false')
    } else if (navItems.style.display == 'flex') {
        navItems.style.display = 'none'
        navItems.setAttribute('aria-expanded', 'false')
        navItems.setAttribute('aria-hidden', 'true')
    }
})

const developerElement = document.getElementById('developer-text')
const developerText = 'Developer'
const designerElement = document.getElementById('designer-text')
const designerText = 'Designer'
const studentElement = document.getElementById('student-text')
const studentText = 'Student'

let i = 0 
function typingDeveloper() {
    if (i < developerText.length) {
        developerElement.innerText += developerText.charAt(i)
        i++
        setTimeout(typingDeveloper, 100)
    }
}

let k = 0
function typingDesigner() {
    if (k < designerText.length) {
        designerElement.innerText += designerText.charAt(k)
        k++
        setTimeout(typingDesigner, 100)
    }
}

let j = 0
function typingStudent() {
    if (j < studentText.length) {
        studentElement.innerText += studentText.charAt(j)
        j++
        setTimeout(typingStudent, 100)
    }
}

setTimeout(typingDeveloper, 1000)
setTimeout(typingDesigner, 2800);
setTimeout(typingStudent, 4200);

// window.setInterval(() => {
//     if (window.innerWidth > 576) {
//         navMd.setAttribute('aria-hidden', 'false')
//         navMdTitle.setAttribute('aria-hidden', 'false')
//         navHeader.setAttribute('aria-hidden', 'true')
//     } else if (window.innerWidth < 576) {
//         navMd.setAttribute('aria-hidden', 'true')
//         navMdTitle.setAttribute('aria-hidden', 'true')
//         navHeader.setAttribute('aria-hidden', 'false')
//     }
// }, 50);

function navIcon(icon) {
    icon.classList.toggle('change')
}