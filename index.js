$(document).ready(function(){
    $('img#richguy').mouseenter(function(){
        $('img#richguy').fadeTo("slow",0);
        $("img#richguy").slideDown("fast");
    });
    $("img#richguy").mouseleave(function(){
        $('img#richguy').fadeTo("slow",1);
        $("img#richguy").slideUp("fast");
    });
    $("nav").mouseenter(function(){
        $(this).animate({
            height: '+=10px'
    });
    $("nav").mouseleave(function(){
        $(this).animate({
            height: "-=10px"
    });
});
