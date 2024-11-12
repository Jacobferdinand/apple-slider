# Apple Popup Slider

Here is the Code for the swiper slider:

<head> tag:

<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<!-- [Attributes by Finsweet] Disable scrolling -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"></script>


before <body> tag:

<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<script>
  // Select all elements that have the attribute swiper="slider"
  var sliders = document.querySelectorAll('[swiper="slider"]');

  // Only proceed if there are sliders on the page
  if (sliders.length > 0) {
    sliders.forEach(function (sliderElement) {
      // Find the next and prev buttons relative to the current slider element
      var nextButton = sliderElement.parentElement.querySelector('[swiper="next"]');
      var prevButton = sliderElement.parentElement.querySelector('[swiper="prev"]');

      // Check if nextButton and prevButton exist before initializing Swiper
      if (nextButton && prevButton) { 
        // Initialize Swiper for the current section using the corresponding navigation buttons 
        var swiper = new Swiper(sliderElement, { 
          slidesPerView: 4, // Default to 3 slides per view (desktop) 
          spaceBetween: 16, // Optional: space between slides in px
          speed: 600, // Slide transition speed in milliseconds (1000ms = 1 second)
          navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
          },
          breakpoints: {
            // when window width is >= 1024px (desktop)
            992: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            // when window width is >= 768px (tablet)
            478: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            // when window width is < 768px (mobile)
            0: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
          },
          on: {
            init: function () {
              updateNavigationButtons(this, nextButton, prevButton); // Pass swiper instance and buttons to function
            },
            slideChange: function () {
              updateNavigationButtons(this, nextButton, prevButton); // Update buttons on slide change
            },
          },
        });
      }
    });
  }

  // Function to update navigation buttons' active/inactive state
  function updateNavigationButtons(swiperInstance, nextButton, prevButton) {
    // Check if swiperInstance is at the last slide
    if (swiperInstance.isEnd) {
      nextButton.classList.add('swiper-button-inactive');
    } else {
      nextButton.classList.remove('swiper-button-inactive');
    }

    // Check if swiperInstance is at the first slide
    if (swiperInstance.isBeginning) {
      prevButton.classList.add('swiper-button-inactive');
    } else {
      prevButton.classList.remove('swiper-button-inactive');
    }
  }
  
</script>
