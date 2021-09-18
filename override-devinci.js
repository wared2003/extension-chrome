document.addEventListener("click", function maximumAnnoyance(){

    console.log('isDetectingClick');
    const windowsErrorSound = new Audio('https://github.com/wared2003/extension-chrome-portaildvc/blob/DeVinci_menu/assets/sounds/windowsError.mp3');
    windowsErrorSound.play();
    windowsErrorSound.loop = false;
    console.log(windowsErrorSound);
    console.log('isPlayingSound');

});