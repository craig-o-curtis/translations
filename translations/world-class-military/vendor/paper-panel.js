/**
 * Created by chenGang on 13-11-27.
 */

$().ready(function(){
    var subMenu01=$("#subMenu01");
    subMenu01.hide();
    $("#to_subMenu01").hover(function(){
        subMenu01.css({left:$(this).offset().left,top:$(this).offset().top+31});
        subMenu01.show();
    });

    subMenu01.mouseleave(function(){
        $(this).hide();
    });

    $("body").click(function(e){
        //console.log(e.target);
        subMenu01.hide();
    });
});