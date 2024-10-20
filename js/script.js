/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close"),
  loginContent = document.getElementById("login-content");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}

if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 30
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
addEventListener("scroll", shadowHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  breakpoint: {
    1150: {
      slidePerView: 1,
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
addEventListener("scroll", scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=================================== DARK LIGHT THEME ==========================================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// if user selected
const secletedTheme = localStorage.getItem("selected-theme"); 
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// we validatw if the user previuously chose a topic
if (secletedTheme) {
  document.body.classList[secletedTheme == "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[secletedTheme == "ri-moon-linne" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
  origin: 'top',
  duration: 1000,
  distance: '60px',
  delay: 400,
  reset: true,
})

// Home
sr.reveal('.home__data' , {delay:400 ,origin: 'left'})
sr.reveal('.home__images', {delay:400, origin: 'right'})

// service 
sr.reveal('.services__card', {interval:100, delay: 500})


// Provider
sr.reveal('.provider__images', {delay:400, origin: 'right',distance:'80px'})
sr.reveal('.provider__data', {delay:400, origin: 'left',distance:'80px'})

// app
sr.reveal('.app__images', {delay:400, origin: 'right',distance:'80px'})
sr.reveal('.app__data', {delay:400, origin: 'left',distance:'80px'})

//testimonial & footer
sr.reveal('.testimonial__container, .about__container ,.footer__container', {interval:100, delay: 400, distance: '90px'})
