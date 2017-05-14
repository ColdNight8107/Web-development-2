//JavaScript Document
$(function(){
    $("#SMALL img").click(function(){ //當小圖示被按下時，將該圖顯示到#BIG的主圖上
        var N = $(this).attr("id").substr(2);
        $("#BIG").attr("src","images/dog" + N +".jpg");
    });
});