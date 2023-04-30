$(document).ready(function () {
  // Smooth scrolling
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 15,
        },
        1000
      );
    }
  });

  // Add active class to nav-link on scroll
  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop();
    $(".nav-link").each(function () {
      var currLink = $(this);
      var refElement = $($(this).attr("href"));
      if (
        refElement.position().top - 50 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav-link").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  });
});

// Testimonials

$(document).ready(function () {
  $(".testimonials-container").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Mobile Menu

$(".menu-btn").click(function () {
  $(".navbar").toggleClass("mobile");
  $(".menu-btn").toggleClass("active");
});
