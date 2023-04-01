// document.querySelector("button").addEventListener("click",handleclick)
// function handleclick(){
//     alert("I got clicked");
// }
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

       
    });
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
    buttonAnimation(event.key);
})
function makesound(key){
    switch (key) {

        case "a":
            var snare = new Audio("audio/snare.mp3");
            snare.play();
            break;
        case "w":
            var audio = new Audio("audio/drum.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("audio/tom-1.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("audio/tom-2.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("audio/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("audio/tom-2.mp3");
            audio.play();
            break;

        case "l":
            var tom3 = new Audio("audio/tom-3.mp3");
            tom3.play();
            break;
        default: console.log(buttonInnerHTML);

    }
}
function buttonAnimation(currentkey){
 var activeButton=document.querySelector("."+currentkey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}