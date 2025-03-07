$(function () {
  // id属性が文字色変化の要素がクリックされたら
  $('#change-color').on('click', function() {
    // 文字色変化する
    $('#target').css('color', 'blue');
  });
  // id要素の文字内容変更の要素がクリックされたら
   $('#change-text').on('click', function() {
    //文字内容変更する
    $('#target').text('Hello!');
  });
  // id属性がfadeOutの要素がクリックされたら
 $('#fade-out').on('click', function() {
  // フェードアウトする
  $('#target').fadeOut();
  });

  // id属性がfadeInの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });

 }); 