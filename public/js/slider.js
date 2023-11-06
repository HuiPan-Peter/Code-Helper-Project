document.addEventListener("DOMContentLoaded", () => {
    // Keen Slider Initialization
    const sliderElement = document.getElementById("keen-slider");
    
    if (sliderElement) {
      new KeenSlider(sliderElement, {
        loop: true,
        duration: 1000,
        slidesPerView: 1,
        spacing: 15,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        slideChanged(s) {
          console.log("Slide changed to", s.details().relativeSlide);
        },
      });
    }
  });
  