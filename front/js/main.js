$(document).ready(function(){
    // 首頁輪播
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
    // 商品分類
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
    // 最新推出 + 熱門商品
    $('.productsSlick').slick({
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
    // 產品介紹頁面
    $('.productImg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.productSlick'
      });
    $('.productSlick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.productImg',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
          }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        },
    ]
    });
    // 相關商品
    $('.relatedProductSlick').slick({
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
                  dots: true,
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
});


