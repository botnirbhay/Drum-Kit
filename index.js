// detecting button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var buttonInnerhtml=this.innerHTML;
    makesound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
   
    
});
}

// detecting keypress
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
    buttonAnimation(event.key);
});

// make sound function that produces the sound

function makesound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("no buttons");
            break;
    }
}

function buttonAnimation(curkey)
{
    var act=document.querySelector("."+curkey);
    act.classList.add("pressed");
    setTimeout(function()
    {
        act.classList.remove("pressed");
    },100);


}

