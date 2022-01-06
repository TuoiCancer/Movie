const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navLayer = $(".nav__layer");
const navItems = $$(".nav__item");
const headerItems = $$(".header");
const leftBtn = $(".icon-left");
const rightBtn = $(".icon-right");
const signupBtn = $(".btn__signUp");
var index = 0;

signupBtn.onclick = () => {
  window.location.href = "trangchu.html";
};

window.addEventListener("scroll", (e) => {
  const x = window.pageYOffset;
  if (x > 80) {
    navLayer.classList.add("active");
  } else {
    navLayer.classList.remove("active");
  }
});

navItems.forEach((item, i) => {
  item.onclick = (e) => {
    $(".nav__item.active").classList.remove("active");
    item.classList.add("active");
  };
});

var swiperTrending = new Swiper(".mySwiperTrending", {
  slidesPerView: 5,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperFeature = new Swiper(".mySwiper", {
  slidesPerView: 3.7,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperCartoon = new Swiper(".mySwiperCartoon", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperSeries = new Swiper(".mySwiperSeries", {
  slidesPerView: 3.5,
  spaceBetween: 10,
  freeMode: true,
});

var swiperHeader = new Swiper(".mySwiperHeader", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiperComment = new Swiper(".review__content", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const sr = ScrollReveal({
  reset: true,
  duration: 1000,
  opacity: 0,
  origin: "top",
});
sr.reveal(".nav", {
  distance: "50px",
  origin: "top",
});

sr.reveal(".header__template", {
  origin: "right",
  scale: 0.5,
});

sr.reveal(".trending__list , .series__list", {
  origin: "bottom",
  duration: 1500,
  delay: 500,
  distance: "100px",
});

sr.reveal(".feature__list , .cartoon__list", {
  delay: 600,
  origin: "top",
  distance: "100px",
});

sr.reveal(".review__input", {
  origin: "left",
  distance: "100px",
  duration: 1000,
  delay: 600,
});

sr.reveal(".review__content", {
  origin: "right",
  distance: "100px",
  duration: 1000,
  delay: 800,
});
