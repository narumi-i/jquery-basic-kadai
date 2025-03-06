$(function () {
  

  // class属性がshowの要素がクリックされたら要素を表示
  $('.btn').on('click', function(){
    $('.text-box').val('クリックしました！');
    });

    $('.btn').on('click', function(){
      $('.text-box').toggle(); // クリックするたびに表示・非表示を切り替え
    });
  });
