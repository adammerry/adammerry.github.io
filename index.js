$(document).ready(function(){
    $('img#richguy').mouseenter(function(){
        $('img#richguy').fadeTo("slow",0);
    });
    $("img#richguy").mouseleave(function(){
        $('img#richguy').fadeTo("slow",1);
    });
    $("#paragraph").click(function(){
        $("#paragraph").slideDown("fast")
    });
    $('button').click(function() {
        $('.vanish').fadeOut("slow")
    });
});
