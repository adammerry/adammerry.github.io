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
    	$(this).animate({top:"+=10px", left:"+=10px"},500);
    },
    function(){
    	$(this).animate({top:"-=10px", left:"-=10px"},500);
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

    /* function for displaying and updating date */
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
    
    /*function that asks for name with an alert*/
    document.getElementById("alertButton").onclick = function() {
    var person = window.prompt("Please enter your name", "Dr. Mantis Toboggan");
    if (isNaN(person) === false && person !=="")  {
        alert("You entered a number, not a name")
    }
    else if (person ==="") {
        alert("Looks like you forgot something");
    }
    else {
        var myText = "Hello " + person;
        alert(myText);
    }
    };
    
    /*function that asks for age with an alert*/
    document.getElementById("ageButton").onclick = function() {
    var age = window.prompt("Please enter your age in years", "0");
    if (isNaN(age) === true && age !=="") {
        alert("You need to enter a number");
    }
    else if (age ==="") {
        alert("Looks like you forgot something");
    }
    else {
        var myAge = "You are " + age + " years old";
        alert(myAge);
    }
    };

    /*function that shows the div that contains the name and age buttons*/
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
    
    /*switch for boston sports pic and text*/
    document.getElementById("bostonsports").onclick = function() {
        var favTeam = window.prompt("Enter the name of your favorite Boston sports team", "Ex. 'Bruins'").toUpperCase();
            switch (favTeam) {
                case "BRUINS":
                    document.getElementById("sportsfacts").innerHTML = "The Bruins have won 6 Stanley Cups, which is tied for 4th most all time with the Blackhawks";
                    document.getElementById("sportsPic").src = "http://www.ballermindframe.com/wp-content/uploads/2015/04/boston-bruins-0.jpg";
                    break;
                case "BOSTON BRUINS":
                    document.getElementById("sportsfacts").innerHTML = "The Bruins have won 6 Stanley Cups, which is tied for 4th most all time with the Blackhawks";
                    document.getElementById("sportsPic").src = "http://www.ballermindframe.com/wp-content/uploads/2015/04/boston-bruins-0.jpg";
                    break;
                case "RED SOX":
                    document.getElementById("sportsfacts").innerHTML = "The Red Sox have won 8 World Series', which is tied for 4th most all time with the Giants";
                    document.getElementById("sportsPic").src = "http://www.sports-logos-screensavers.com/user/Boston_Red_Sox.jpg";
                    break;
                case "BOSTON RED SOX":
                    document.getElementById("sportsfacts").innerHTML = "The Red Sox have won 8 World Series', which is tied for 4th most all time with the Giants";
                    document.getElementById("sportsPic").src = "http://www.sports-logos-screensavers.com/user/Boston_Red_Sox.jpg";
                    break;
                case "CELTICS":
                    document.getElementById("sportsfacts").innerHTML = "The Celtics have won 17 NBA Championships, which is the most of any team";
                    document.getElementById("sportsPic").src = "https://pbs.twimg.com/profile_images/2815110476/033393c13e6dec0fd6cc5006453fbeb5_400x400.png";
                    break;
                case "BOSTON CELTICS":
                    document.getElementById("sportsfacts").innerHTML = "The Celtics have won 17 NBA Championships, which is the most of any team";
                    document.getElementById("sportsPic").src = "https://pbs.twimg.com/profile_images/2815110476/033393c13e6dec0fd6cc5006453fbeb5_400x400.png";
                    break;
                case "REVOLUTION":
                    document.getElementById("sportsfacts").innerHTML = "The Revolution have appeared in 5 MLS Cup finals, but have lost every time, and never scored more than one goal in a final match";
                    document.getElementById("sportsPic").src = "http://cdn.fullfifa.com/wp-content/uploads/2014/11/nerevolution.jpg";
                    break;
                case "NEW ENGLAND REVOLUTION":
                    document.getElementById("sportsfacts").innerHTML = "The Revolution have appeared in 5 MLS Cup finals, but have lost every time, and never scored more than one goal in a final match";
                    document.getElementById("sportsPic").src = "http://cdn.fullfifa.com/wp-content/uploads/2014/11/nerevolution.jpg";
                    break;
                case "PATRIOTS":
                    document.getElementById("sportsfacts").innerHTML = "The Patriots have won 4 Super Bowls, which is tied for 4th most with the Giants and Packers";
                    document.getElementById("sportsPic").src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/New_England_Patriots_logo_old.svg/1024px-New_England_Patriots_logo_old.svg.png";
                    break;
                case "NEW ENGLAND PATRIOTS":
                    document.getElementById("sportsfacts").innerHTML = "The Patriots have won 4 Super Bowls, which is tied for 4th most with the Giants and Packers";
                    document.getElementById("sportsPic").src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/New_England_Patriots_logo_old.svg/1024px-New_England_Patriots_logo_old.svg.png";
                    break;
                default:
                    document.getElementById("sportsfacts").innerHTML = "You didn't type a correct team name";
                    document.getElementById("sportsPic").src = "http://www.thesportstruth.com/wp-content/uploads/2015/11/sports.jpg";
        }
    };
    
    /*leap years*/
    for (i = 2016; i <2057; i += 4) {
        document.getElementById("leapYear").innerHTML += (i + " is a leap year" + "<br>");
    }
    
    /*coin toss*/
    var headCount = 0;
    document.getElementById("coin").onclick = function() {
            var randomNum = Math.random();
                if (randomNum > 0.5) {
                    alert("HEADS");
                    headCount++;
                    alert ("You have " + headCount + " heads in a row");
                }
                else {
                    alert("TAILS");
                    headCount = 0;
                }
    };
    document.getElementById("bigGulps").onclick = function() {
        document.getElementById("iframe2").play();
    }
});
