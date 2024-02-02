///// 線が伸びるための設定を関数でまとめる

function ScrollTimelineAnime() {
  // それぞれのli要素の
  $('.timeline li').each(function() {
    // 上からの高さ取得
    var elemPos = $(this).offset().top;

    // スクロール値取得
    var scroll = $(window).scrollTop();

    // windowの高さ取得
    var windowHeight = $(window).height();

    // 線をスタートさせる位置を指定 ※レイアウトによって要調整
    var startPoint = 100;

    // スクロール量が線をスタートさせる位置を超えたら動かす処理
    if (scroll >= elemPos - windowHeight - startPoint) {				
      // liの余白と高さを含めた数値を取得
      var H = $(this).outerHeight(true)

      // スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
      // liの余白と高さの半分で線を100％に伸ばす
      var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;

      // 100%を超えたらずっと100%を入れ続ける
      if (percent  > 100) {
        percent  = 100;
      }
      // ボーダーの長さをセット
      $(this).children('.border-line').css( {
        // CSSでパーセント指定
        height: percent + "%",
      });
    } 
  });
}


///// 画面をスクロールをしたら動かしたい場合の記述

$(window).on('scroll', function() {
  // 線が伸びる関数を呼ぶ
  ScrollTimelineAnime();
});


///// ページが読み込まれたらすぐに動かしたい場合の記述

$(window).on('load', function() {
  // 線が伸びる関数を呼ぶ
  ScrollTimelineAnime();
});