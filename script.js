const menu = document.querySelector('.dropdown-content')
const btn = document.querySelector('.dropdown-nav')

btn.addEventListener('click', (e)=> {
  
 menu.classList.toggle('show')
  e.stopPropagation()
})

document.addEventListener('click', (e)=> {
  if(e.target.closest('.dropdown-content')) return 
  menu.classList.remove('show')
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("to-top-active");
  } else {
    toTop.classList.remove("to-top-active");
  }
})

function topFunction() { window.scrollTo(0, 0); 
}

const headerShadow = document.querySelector('header')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    headerShadow.classList.add("headershadow");
  } else {
    headerShadow.classList.remove("headershadow");
  }
})