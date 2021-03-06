$(function() {  
  $(".gnb__menu-item").hover(function() {
    $(".gnb__sub-menu").stop().slideDown(400);
  }, function() {
    $(".gnb__sub-menu").stop().slideUp(400);
  });
});