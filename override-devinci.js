
  var curent_page_href = window.location.href;
  if(curent_page_href == 'https://www.leonard-de-vinci.net/?my=edt'){
     document.getElementsByTagName('body')[0].className = 'edt';
     console.log('loaded');
     var calendar = document.getElementsByClassName('body')[0];
     setTimeout(() => {  calendar.className = 'body transition_une_seconde_gauche';}, 500);
     setTimeout(() => {  calendar.className = 'body transition_une_seconde_gauche rotation-360';}, 1500);

     calendar.style.left = '0px !important';
  };
