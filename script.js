const list = document.querySelector('.dropdown-content')
const btn = document.querySelector('.dropdown-nav')

btn.addEventListener('click', (e)=> {
  
 list.classList.toggle('show')
  e.stopPropagation()
})

document.addEventListener('click', (e)=> {
  if(e.target.closest('.dropdown-content')) return 
  
  list.classList.remove('show')

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