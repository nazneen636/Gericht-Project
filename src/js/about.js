

$(".insta_slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  centerPadding: "32px",
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1500,
})

$(".menu-slider").slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: "linear",
  // asNavFor: '.menu-list-slider'
});
