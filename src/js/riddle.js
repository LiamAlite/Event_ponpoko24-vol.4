var num = 0;
$("#omesis").click(function(){
    $(this).data("click", ++num);
    var click = $(this).data("click");
    if(click == 5){
        $("#riddle").modal("show");
        click = 0
        num = 0
    }
    return false;
});
