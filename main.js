// main.js
$(function(){
  // 모바일 gnb 열기
  $('#toggle').on('click', function(){
    $('#gnb').addClass('show');
  });

  // 모바일 gnb 닫기
  $('.btn_close').on('click', function(){
    $('#gnb').removeClass('show');
  })

  $(window).on('resize', function(){
    var x = window.matchMedia("(min-width: 768px)");
    if(x.matches) { $('#gnb').removeClass('show');}
  })

}) // end$