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

}) // end$