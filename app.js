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
  $("html, body").animate({ scrollTop: $(href).offset().top  /* -100 */}, 500);
  });


 