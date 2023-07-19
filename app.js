const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // autoplay: {
  //   delay: 5000,
  // },

  speed: 800,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
  
  // Smooth scrolling
  $("nav a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top  -100 }, 500);
  });


  const header = document.querySelector('.header')
  let toggler = document.querySelector('.toggler');
  
  toggler.onclick = ()=> {
    header.classList.add('navbar-bg')
    toggler.firstChild.classList.toggle("fa-times")
    toggler.firstChild.classList.toggle("fa-bars")
  }
  

  document.body.onscroll = () => {
  
    if (document.body.scrollTop == 0  && !toggler.firstChild.classList.contains('fa-times')) {
      header.classList.remove('navbar-bg')
    } else {
      header.classList.add('navbar-bg')
    }
  
  }
  