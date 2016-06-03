alert("This is an alert I created in index.js!");
$(document).ready(fucntion(){
    $("img#richguy").slideDown("slow");
    $('img#richguy').mouseenter(function() {
        $('img#richguy').fadeTo("fast",0.5);
    });
    $("img#richguy").mouseleave(function() {
        $('img#richguy').fadeTo("fast",1);
    });
});
