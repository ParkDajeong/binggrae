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
  $(".slide").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false, 
    centerMode: true,
    slidesToShow: 3,
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