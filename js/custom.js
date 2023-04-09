const bars = document.querySelector('.bars')
const times = document.querySelector('.times')
const header = document.querySelector('header')

// bars.addEventListener('click', (e) => {
//   header.classList.toggle('show-sidebar')
// })
// // times.addEventListener('click', (e) => {
// //   header.classList.remove('show-sidebar')
// // })
// document.addEventListener('mouseup', (e) => {
//   if (!header.contains(e.target) && !bars.contains(e.target)) {
//       header.classList.remove('show-sidebar')
//   }
// })

let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

function handleScroll() {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.05) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);



var swiper = new Swiper(".catalogue-slider", {
  slidesPerView: 4,
  spaceBetween:20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 2000,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,

    },
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});


// var swiper = new Swiper(".swiper-testi", {
//   slidesPerView: 2,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   speed: 5000,
//   breakpoints: {
//     // when window width is >= 320px
//     100: {
//       slidesPerView: 1,

//     },
//     320: {
//       slidesPerView: 1,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 2,
//     }
//   },
// });

AOS.init();