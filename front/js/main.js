$(document).ready(function(){
    $('.bannerSlick').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '500px',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '280px',
                  slidesToShow: 1
                }
            },
            {
                breakpoint: 1600,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '80px',
                  slidesToShow: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '80px',
                  slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]
      });
    $('.productSlick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
    $('.classificationSlick').slick({
        slidesToShow: 6,
        arrows: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                }
            },
        ]
    });
});


