var afterClick = document.querySelector(".drum");

var n = document.getElementsByClassName("drum").length;
var i = 0;

while (n--) // Adding eventListeners to all of our buttons.
{
    //when we add any eventListener to a function, then if the event 
    //happens it automatically triggers the function(here, handleClick).
    document.getElementsByClassName("drum")[i].addEventListener("click", handleClick);

    function handleClick() {
        this.style.color = "blue";
        var choice = this.innerHTML;
        playAudio(choice);
        addAnimation(choice);
        // alert("clicked");
    }
    i++;
}
document.addEventListener("keydown", function (event) {   //here the event listener is added to the entire document
    //since we do not have specific part where we want to listen KeyBoard Input Events.

    playAudio(event.key);
    addAnimation(event.key);

})

function playAudio(choice) {
    switch (choice) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function addAnimation(key){
    var keyClass="."+key;
    document.querySelector(keyClass).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(keyClass).classList.remove("pressed"); 
    },250)
}
