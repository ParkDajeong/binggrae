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

  $(".gnb-mo__link--dropdown").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("on");
  });
});