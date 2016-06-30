$(document).ready(function(){
    $('img#richguy').mouseenter(function(){
        $('img#richguy').fadeTo("slow",0);
    });
    $("img#richguy").mouseleave(function(){
        $('img#richguy').fadeTo("slow",1);
    });
    $('button').click(function(){
        $('.vanish').fadeOut("slow");
    });
    $("#lion").mouseenter(function(){
        $("#myLionDropDown").toggle("slow");
    });
    $("#lion").mouseleave(function(){
        $("#myLionDropDown").toggle("slow");
    });
    $("#tiger").mouseenter(function(){
        $("#myTigerDropDown").toggle("slow");
    });
    $("#tiger").mouseleave(function(){
        $("#myTigerDropDown").toggle("slow");
    });
    $("#jaguar").mouseenter(function(){
        $("#myJaguarDropDown").toggle("slow");
    });
    $("#jaguar").mouseleave(function(){
        $("#myJaguarDropDown").toggle("slow");
    });
    $("#cheetah").mouseenter(function(){
        $("#myCheetahDropDown").toggle("slow");
    });
    $("#cheetah").mouseleave(function(){
        $("#myCheetahDropDown").toggle("slow");
    });
    $("#cougar").mouseenter(function(){
        $("#myCougarDropDown").toggle("slow");
    });
    $("#cougar").mouseleave(function(){
        $("#myCougarDropDown").toggle("slow");
    });
    $("#addbutton").click(function(){
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append("<div class='item'>" + toAdd + "</div>");
    });
    $(document).on("click",".item",function(){
        $(this).remove();
    });
    $("img#bisonpic").mouseenter(function(){
        $(".bison").append("<p> What many people often refer to as 'buffaloes', are actually bison. These massive animals are more related to cows and goats than they are to true buffaloes, which are found in Asia and Africa. Although bison are the heaviest land mammals in North America, they can run up to 40 mph and jump up to 6 feet high.</p>");
    });
    $("img#bisonpic").mouseleave(function(){
        $(".bison").children("p").remove();
    });
    $("img#ostrichpic").mouseenter(function(){
        $(".ostrich").append("<p>Ostriches are the worlds largest birds. Despite their size and the fact that they have 3 stomachs, ostriches can reach speeds of over 40 mph. While their brains may be tiny, they are capable of seeing predators at long distances due to having the largest eyes of any land mammal.</p>");
    });
    $("img#ostrichpic").mouseleave(function(){
        $(".ostrich").children("p").remove();
    });
    $("img#goatpic").mouseenter(function(){
        $(".goat").append("<p>Goats have amazing coordination, and have been known to climb trees as well as the sides of cliffs. Goats are also responsible for the discovery of coffee. This happened when an Ethiopian herder noticed his goats becoming more energetic after eating from a coffee bush.</p>");
    });
    $("img#goatpic").mouseleave(function(){
        $(".goat").children("p").remove();
    });
    $(".vanish").hover(function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    });
    
    $("img#cowpic").hover(function(){
    	$(this).animate({top:"+=10px"},500);
    },
    function(){
    	$(this).animate({top:"-=10px"},500);
    });
    $("#menu").accordion({collapsible: true, active: false});
    $("img#dynamite").click(function(){
        $(this).effect("explode");
    });
        var slidewidth = $(document).width() / 4;

    function goRight(){
        $("#snake").animate({left: slidewidth}, 5000, function(){
         setTimeout(goLeft, 50);
      });
    }
    function goLeft(){
        $("#snake").animate({left: -slidewidth}, 5000, function() {
         setTimeout(goRight, 50);
      });
    }
    setTimeout(goRight, 50);
    
    function updateClock() {

    var today = new Date();
    var s = today.getSeconds();
    var m = today.getMinutes();
    var h = today.getHours();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    var dayofweek = weekday[today.getDay()]; 
        
    if(dd<10) {
        dd="0"+dd
    } 

    if(mm<10) {
        mm="0"+mm
    } 
    
    if(m<10) {
        m="0"+m
    }
    
    if(s<10) {
        s="0"+s
    }
    
    if(h>12) {
        h = h-12;
    }
    else if(h === 0) {
        h = 12;
    }
    
    today = h+":"+m+":"+s+" "+dayofweek+", "+mm+"/"+dd+"/"+yyyy;
    document.getElementById("date").innerHTML = today;
    setTimeout(updateClock, 1000);
    }
    updateClock();
    
    document.getElementById("alertButton").onclick = function() {
    var person = window.prompt("Please enter your name", "Dr. Mantis Toboggan");
    if (person != "" || person != null) {
        var myText = "Hello " + person;
        alert(myText);
    }
    else {
        alert("Looks like you forgot something");
    }
    };
    
    document.getElementById("ageButton").onclick = function() {
    var age = window.prompt("Please enter your age in years", "0");
    if (age != "" || person != null) {
        var myAge = "You are " + age + " years old";
        alert(myAge);
    }
    else {
        alert("Looks like you forgot something");
    }
    };

    document.getElementById("showButtons").onclick = function() {
      //get the div that contains the buttons we want to show
      var buttonDiv = document.getElementById("infoButtons");
      // get the current value of the div's display property 
      var displaySetting = buttonDiv.style.display;
      // also get the button that when clicked, will show the div containing the other buttons, so we can change what it says 
      var buttonToShowButtons = document.getElementById('showButtons');
      // now toggle the div and the showbutton text, depending on current state
      if (displaySetting == 'block') { 
        // div is visible. hide it
        buttonDiv.style.display = 'none';
        // change button text
        buttonToShowButtons.innerHTML = 'Show more buttons';
      }
      else { 
        // div is hidden. show it 
        buttonDiv.style.display = 'block';
        // change button text
        buttonToShowButtons.innerHTML = 'Show less buttons';
      }
    };
    
    var video,speed,volume;
    function init(){
        // initialize the player 
        // first, get the media element and assign it to the video variable
        video = document.getElementById('iframe');      
        // get the current playbackRate from the HTML5 media API 
        // range is 0 to very fast, with 1 being normal playback 
        speed = document.getElementById("iframe").playbackRate;         
        // volume range is 0 to 1 
        // set it in the middle so we have room to move it with our buttons
        volume = 0.5;
        document.getElementById("iframe").volume = volume; 
    }
        
    document.getElementById("play").onclick = function {       
        document.getElementById("iframe").play(); 
    }
      
    document.getElementById("pause").onclick = function {       
        document.getElementById("iframe").pause();
    }
      
        /*function changeSpeed(direction) { 
        // direction is either 'up' (faster) or 'down' (slower) 
        if (direction == 'up') { 
    if (speed < 10) { 
      // increase playbackRate 
      speed = speed + 0.1; 
    }
  }  
  else if (direction == 'down') { 
    if (speed > 0) {
      // decrease playbackRate
      speed = speed - 0.1; 
    }
  }
  // so far all we've done is change the value of our speed variable 
  // not let's assign it to the player 
  document.getElementById("iframe").playbackRate = speed;           
}
      
function changeVolume(direction) { 
  if (direction == 'up') { 
    // if not fully cranked yet, increase volume 
    if (volume < 0.9) {
      volume = volume + 0.1; 
    }
  }  
  else if (direction == 'down') { 
    // if not muted, decrease volume
    if (volume > 0.1) {  
      volume = volume - 0.1; 
    }
  }       
  // so far all we've done is change the value of our volume variable 
  // not let's assign it to the player 
  video.volume = volume;            
} 
      
// wait until the web page has finished loading, then run the init function
window.onload = init;*/
});
