$(document).ready(function(){
    $("main").mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
    $("img#richguy").slideDown("slow");
    $('img#richguy').mouseenter(function() {
        $('img#richguy').fadeTo("fast",0.5);
    });
    $("img#richguy").mouseleave(function() {
        $('img#richguy').fadeTo("fast",1);
    });
});
