$(function() {  
  $(".gnb__menu-item, .gnb__2depth-area").hover(function() {
    $(".gnb__sub-menu, .gnb__2depth-area, .gnb__bg").stop().slideDown();
  }, function() {
    $(".gnb__sub-menu, .gnb__2depth-area, .gnb__bg").stop().slideUp();
  });
});