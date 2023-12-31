
$(document).keydown(function(event){
    const key = event.key;
    playDrum(key);
    buttonAnimation(key);
})

$("button").click(function(event){
    playDrum(this.id);
    buttonAnimation(this.id);
})


function playDrum(id){
    var audioPath;

    switch (id) {
        case "w":
            audioPath = "./sounds/tom-1.mp3";
            break;
        case "a":
            audioPath = "./sounds/tom-2.mp3";
            break;
        case "s":
            audioPath = "./sounds/tom-3.mp3";
            break;
        case "d":
            audioPath = "./sounds/tom-4.mp3";
            break;
        case "j":
            audioPath = "./sounds/snare.mp3";
            break;
        case "k":
            audioPath = "./sounds/crash.mp3";
            break;
        case "l":
            audioPath = "./sounds/kick-bass.mp3";
            break;
        default:
            // Handle default case
            break;
    }
    
    var audio = new Audio(audioPath);
    audio.play();
}


function buttonAnimation(key){
    var button = $("."+key);
    button.toggleClass("pressed");
    setTimeout(function(){
        button.toggleClass("pressed");
    }, 100);

}