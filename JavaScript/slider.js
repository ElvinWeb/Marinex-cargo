$(".slider").owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".brend-icon-slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  margin: 50,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
