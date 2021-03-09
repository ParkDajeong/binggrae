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
  
  // Slick Slide
  $(".story__slide").on("init", function(_event, _slick){
    $(".slick-active .slide-controller__tab").addClass("active");
  });
  
  $(".story__slide").on("beforeChange", function(_event, _slick, _current, next){
    if(next % 3 === 0) {
      $(".slide-controller__tab").removeClass("active");
      $(".slick-dots li").eq(next).find(".slide-controller__tab").addClass("active");
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

  // Slide Button-Pause
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