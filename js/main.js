$(function () {
/*=================================================
    ハンバーガ―メニュー
    ===================================================*/
  // ハンバーガーメニューをクリックした時
$(".hamburger").on("click", function () {
    $("header").toggleClass("open");
});
  // メニューのリンクをクリックした時
$("#nav a").on("click", function () {
    $("header").toggleClass("open");
});

/*=================================================
スムーススクロール
===================================================*/

$('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
});

/*=================================================
スライダー
===================================================*/
/*カルーセル用 jQueryプラグイン「slick」の設定*/
/*マニュアル：https://kenwheeler.github.io/slick/*/
$(".slick_area").slick({
    arrows: true,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
{
        breakpoint: 768,
        settings: {
        centerPadding: "50px",
        slidesToShow: 1,
        },
},
    ],
});
/*=================================================
もっと見るボタン
===================================================*/
/* ここには、表示するリストの数を指定します。 */
var moreNum = 2;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.announce_list_item:nth-child(n + ' + (moreNum + 1) + ')').addClass('is_hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.list_btn').on('click', function() {
$('.announce_list_item.is_hidden').slice(0, moreNum).removeClass('is_hidden');
if ($('.announce_list_item.is_hidden').length == 0) {
    $('.list_btn').fadeOut();
} 
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
var list = $(".announce_list li").length;  
    if (list < moreNum) {
    $('.list_btn').addClass('is_btn_hidden');
}
});

// '.btn' クラスを持つ要素(無料体験ボタン)がクリックされた際のイベントハンドラを設定します。
$(".btn").click(function (event) {
    // クリック時のデフォルトの動作（例えば、リンクの遷移）を防ぎます。
    event.preventDefault();

    // '#myModal' というIDを持つ要素に対してフェードインアニメーションを適用します。
    // fadeInの第1引数: アニメーションの持続時間をミリ秒で指定（ここでは500ミリ秒）
    $("#myModal").fadeIn(500, function () {
      // fadeInの第2引数（コールバック関数）: アニメーションが完了した後に実行される関数
      // フェードイン完了後、モーダルの透明度を1（完全に不透明）に設定
    $(this).css("opacity", "1");
    });
});

$(".modal_content").click(function (event) {
    event.stopPropagation();//これにより、モーダルコンテンツ内のクリックはモーダルを閉じない
});

  // モーダルの外側をクリックした際にモーダルを閉じる処理を追加
$("#myModal").click(function () {
    // モーダルをフェードアウトさせ、完了後に透明度を0に戻す
    $(this).fadeOut(100, function () {
    $(this).css("opacity", "0");
    });
});

  // 閉じるボタンをクリックしたときの処理
$(".close").click(function () {
    // モーダルをフェードアウト
    $("#myModal").fadeOut(100, function () {
    $(this).css("opacity", "0");
    });
});

// pageTopボタン
$(function () {
    const $pageTop = $("#js_pagetop");

    $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $pageTop.fadeIn(300).css('display', 'flex');
    } else {
        $pageTop.fadeOut(300);
    }
    });

    $pageTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
    });
});

document.querySelectorAll('.vertical_text').forEach(el => {
    el.innerHTML = el.innerHTML.replace(/ー/g, '―'); // 横長の「ー」を縦用の「―」に変換
});

});
