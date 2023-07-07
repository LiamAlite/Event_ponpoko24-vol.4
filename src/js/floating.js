//ドラッグアンドドロップで移動させたい要素をセレクタで指定
$(".able").draggable({
    stack:".able"
});

//id回転させたい要素セレクタで指定
//今回は id="illust" が入っている画像を回転させたいので #illust
//クリックされるたびに呼び出される
$('.able').click(function() {
    console.log('クリックされました！');
    let now_angle = getRotationDegrees($(this));
//10度ずつ回転させる
    let next_angle = now_angle + 15
    $(this).css('transform', 'rotate(' + next_angle + 'deg)');
});

//参考にしたサイト　https://codeday.me/jp/qa/20181219/78103.html
//要素を指定して、transformのrotateを求める
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform") ||
        obj.css("-ms-transform") ||
        obj.css("-o-transform") ||
        obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
        var angle = 0;
    }
    return (angle < 0) ? angle + 360 : angle;
}
