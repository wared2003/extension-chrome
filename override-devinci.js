/*function classNamingOverhaul(){

     if(Element.classList.contains('menu')){
        Element.classList.add("override-menu");
        Element.classList.remove("menu");
    }else{
        return;
    }
} */
var audio = new Audio('../assets/sounds/windowsErrorSound.mp3');

document.body.addEventListener("click", function maximunAnnoyance(evt){

    console.log('clickIsDetected');
    audio.play();

});