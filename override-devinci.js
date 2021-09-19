var curent_page_href = window.location.href;

if (curent_page_href == "https://www.leonard-de-vinci.net/") {
    document.getElementsByTagName("body")[0].className = "home";


    // change image profil
    var img = document.getElementsByClassName('avatar')[1];


    var randomNumber = Math.floor(Math.random() * 6);

    var imageLink = [
        'https://static.wamiz.com/images/news/facebook/le-nyan-cat-fb-5d4c11a4c1020.jpg',
        'https://media-exp1.licdn.com/dms/image/C4D03AQHT3-qq-2A70A/profile-displayphoto-shrink_200_200/0/1599122106754?e=1636588800&v=beta&t=ub6EYY5vXc-riYF9z_Jwx1ej2RTHGUz4hB82GtAXJ3U',
        'https://www.challenges.fr/assets/img/2017/07/02/cover-r4x3w1000-59e64a2c27218-000-pz7n1-1.jpg',
        'https://noppies.xcdn.nl/cm/Trends/NOP/magazine-wk-06-NOP_14/-.jpg?f=RM760,960',
        'https://static.cnews.fr/sites/default/files/styles/image_640_360/public/tupeuxpas_5dc983e67f0ed.jpg?itok=XsUvFZm5',
        'data:image/jpeg;base64,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',

    ]
    img.setAttribute('src', imageLink[randomNumber]);
}

<<<<<<< HEAD
if (curent_page_href == 'https://www.leonard-de-vinci.net/?my=edt') {
    document.getElementsByTagName('body')[0].className = 'edt';
    console.log('loaded');
    var calendar = document.getElementsByClassName('body')[0];
    var btns = document.querySelectorAll('.btn');

    btns.forEach((item, index) => {
        item.addEventListener('mouseover', function (e) {
            item.className = 'btn rotate';
        })})
    setTimeout(() => {
        calendar.className = 'body transition_une_seconde_gauche';
    }, 500);
    setTimeout(() => {
        calendar.className = 'body transition_une_seconde_gauche rotation-360';
    }, 1500);

    calendar.style.left = '0px !important';
}

=======
if(curent_page_href == 'https://www.leonard-de-vinci.net/?my=edt'){
    document.getElementsByTagName('body')[0].className = 'edt';
    console.log('loaded');
    var calendar = document.getElementsByClassName('body')[0];
    setTimeout(() => {  calendar.className = 'body transition_une_seconde_gauche';}, 500);
    setTimeout(() => {  calendar.className = 'body transition_une_seconde_gauche rotation-360';}, 1500);

    calendar.style.left = '0px !important';
};


document.addEventListener("click", function maximumAnnoyance(){

    console.log('isDetectingClick');
    const windowsErrorSound = new Audio('https://github.com/wared2003/extension-chrome-portaildvc/blob/DeVinci_menu/assets/sounds/windowsError.mp3');
    windowsErrorSound.play();
    windowsErrorSound.loop = false;
    console.log(windowsErrorSound);
    console.log('isPlayingSound');

});
>>>>>>> 2631efb0d74e246f6cbd3b8a56df4aafce01fee7
