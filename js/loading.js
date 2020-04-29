window.onload = function(){  // ローディング画面をフェードアウトさせる
    $(function() {
        $("#loading").fadeOut();
    });
}

$(function() {   //ロード中はコンテンツの高さをページの高さに合わせる
    var h = $(window).height();
    $('#contents').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).on('load',function(){  //全ての読み込みが完了したら実行する
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#contents').css('display', 'block');
});

$(function(){  //10秒たったらロードを終わらせる
    setTimeout('stopload()',10000);
});
