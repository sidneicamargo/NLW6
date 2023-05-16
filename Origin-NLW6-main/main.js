/*Abre e fecha o menu, vulgo toggle*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Esconde o menu quando algum item é clicado*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header quanto tiver scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*Slides dos testemunhos */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*scrollReveal: mostra os elementos devagarinho conforme vai descendo a página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
)

/*Botão para voltar para o topo */
const button = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY > 1060) {
    button.classList.add('show')
  } else {
    button.classList.remove('show')
  }
}

/*Ativa o Menu conforme a seção da página */
const sections = document.querySelectorAll('main section[id]')

document.querySelector('nav ul li a[href*=home]').classList.add('active')

function activeMenuAtSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const start = checkpoint >= sectionTop
    const end = checkpoint <= sectionTop + sectionHeight

    if (start && end) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '')
        .classList.remove('active')
    }
  }
}

/*Listener de Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderScroll()
  backToTop()
  activeMenuAtSection()
})
