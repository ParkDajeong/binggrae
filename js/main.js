$(function() {
  // PC Nav Slide Event
  $(".gnb__menu-item, .gnb__2depth-area").hover(function() {
    $(".gnb__sub-menu, .gnb__2depth-area, .gnb__bg").stop().slideDown();
  }, function() {
    $(".gnb__sub-menu, .gnb__2depth-area, .gnb__bg").stop().slideUp();
  });

  // Mobile Nav Toggle
  $(".btn-toggle-menu").on("click", function() {
    $(this).toggleClass("on");
    $(".gnb-mo, .header__logo").toggleClass("on");
  });

  // Mobile Dropmenu
  $(".gnb-mo__link--dropdown").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("on");
  });

  // Section History - Product Button
  $(".history__btn-product").on("click", function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  // Section History - Slide
  let timer = null;
  function animateRollingNum() {
    const od = new Odometer({
      el: $(".num-count"),
      value: 1991,
      thema: "minimal",
      duration: 3000,
    });
    od.update(1991);
    // $(".num-count").innerHTML = 123;

  //   setTimeout(function(){
  //     $(".num-count").innerHTML = 123;
  // }, 100);
  }
  $(".slide-fade").on("beforeChange", function(_event, slick, current, next){
    const length = slick.$slides.length;
    $(".slide-navigation__bar").css("height", `${(100 / (length - 1)) * next}%`);
    if(next === 0) {
      $(".slide-navigation .slick-dots li").removeClass("on");
    } else {
      $(".slide-navigation .slick-dots li").eq(current).addClass("on");
    }
    // clearInterval(timer);
  });


  $(".slide-fade").on("afterChange", function(_event, slick, current) {
    // animateRollingNum();
    setTimeout(function(){
    }, 1000);
    $('#odometer').html(1990);
  });

  $(document).on("click", ".slide-navigation .slick-dots li", function() {
    $(this).prevAll().addClass("on");
    $(this).nextAll().removeClass("on");
  });

  $(".slide-fade").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    draggable: false,
    appendDots: $(".slide-navigation"),
    customPaging: function(slide, i) {
      const elm = slide.$slides[i];
      const year = $(elm).data("year");

      return `<button class="slide-navigation__dot">${year}</button>`;
    },
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 1,
        }
      },
    ],
  });
  
  // Section Stroy - Slide
  $(".story__slide").on("init", function(_event, _slick){
    $(".slick-active .slide-controller__tab").addClass("active");
  });
  
  $(".story__slide").on("beforeChange", function(_event, _slick, _current, next){
    if(next % 3 === 0) {
      $(".slide-controller__tab").removeClass("active");
      $(".slide-controller .slick-dots li").eq(next).find(".slide-controller__tab").addClass("active");
    }
    $(".slide-controller__page em").text(next+1);
  });
  
  const tabStrArr = ["보도자료", "공지사항", "빙그레 영상", "글로벌 빙그레", "사회공헌"];
  let tabIdx = 0;

  $(".slide").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    dots: true,
    arrows: false, 
    centerMode: true,
    slidesToShow: 3,
    pauseOnHover: false,
    appendDots: $(".slide-controller"),
    customPaging: function(_slide, i) {
      if(i % 3 === 0) {
        return `<button class="slide-controller__tab">${tabStrArr[tabIdx++]}</button>`;
      }
      return `<button class="slide-controller__tab"></button>`;
    },
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 1,
        }
      },
    ],
  });

  // Section Story Slide - Button Pause
  $(".slide-controller__btn-pause").on("click", function() {
    if($(this).hasClass("paused")) {
      $(".slide").slick("slickPlay");
      $(this).text("일시정지");
    } else {
      $(".slide").slick("slickPause");
      $(this).text("재생");
    }
    $(this).toggleClass("paused");
  });
});