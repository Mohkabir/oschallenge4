$(document).ready(function () {
  $('.top').click(function () {
    $('.header_1').slideToggle(600);
  });

  $('.menu').click(function(){
    $('.toggle_nav').toggle();
  });

  

 
// the scroll top effect

  $('.main_top').click(function(){
    let geturl = window.location.href ;
    let getlocation = geturl.substring(geturl.lastIndexOf('#')+1);
    if(getlocation == 'home'){
      $('html, body').animate({
        scrollTop: $('#'+ getlocation).offset().top
      },1000);
    }
  });


});

// show the scroll top icon after a bit of scroll
window.addEventListener('scroll', function(){
  let top = document.querySelector('.main_top');

  let scrolling = document.documentElement.scrollTop;

  if(scrolling < 300){
    top.style.display = 'none';
  }else {
    top.style.display = 'block';
  }
})


let getDirection = document.querySelector('.direction');
 let getImg = document.querySelector('.bgimg');

  let currentImg = 1;

  let prev = document.querySelector('.prev_wrapper');
  let next = document.querySelector('.next_wrapper');

  let getTop = document.querySelector('.top');
  let getTopSpan = document.querySelector('.top span');
  let imgText = document.querySelector('.text');

  let getTracker1 = document.querySelector('.tracker_1');
  let getTracker2 = document.querySelector('.tracker_2');
  let getTracker3 = document.querySelector('.tracker_3');



  // to toggle the up and down icon
  getTop.onclick = function(){
    if(getTopSpan.classList == 'glyphicon glyphicon-chevron-up'){
      getTopSpan.classList = 'glyphicon glyphicon-chevron-down';
    }else if(getTopSpan.classList == 'glyphicon glyphicon-chevron-down'){
      getTopSpan.classList = 'glyphicon glyphicon-chevron-up';
    }
    
  }

 

window.onload = function () {
  

  setInterval(slide, 3000);

  function slide() {

    if (currentImg == 1) {
    
      getImg.src =  "./images/background1.jpg";
      imgText.style.textAlign = 'left';

      getTracker1.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker2.style.backgroundColor = '#ffffff';
      getTracker3.style.backgroundColor = '#ffffff';
    } else if (currentImg == 2) {
      getImg.src =  './images/background2.jpg';
      imgText.style.textAlign = 'center';

      getTracker2.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker1.style.backgroundColor = '#ffffff';
      getTracker3.style.backgroundColor = '#ffffff';
    }else if (currentImg == 3) {
      getImg.src =  './images/background3.jpg';
      imgText.style.textAlign = 'right';

      getTracker3.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker1.style.backgroundColor = '#ffffff';
      getTracker2.style.backgroundColor = '#ffffff';
    }

    currentImg++ ;

    if( currentImg > 3){
      currentImg = 1;
    }
    if( currentImg < 1){
      currentImg = 3;
    }

    
  

  }


  prev.onclick = function(){
    clearInterval(slide);
    if (currentImg == 1) {
    
      getImg.src =  "./images/background3.jpg";
      imgText.style.textAlign = 'right';

      getTracker3.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker1.style.backgroundColor = '#ffffff';
      getTracker2.style.backgroundColor = '#ffffff';
    } else if (currentImg == 2) {
      getImg.src =  './images/background1.jpg';
      imgText.style.textAlign = 'left';

      getTracker1.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker2.style.backgroundColor = '#ffffff';
      getTracker3.style.backgroundColor = '#ffffff';
    }else if (currentImg == 3) {
      getImg.src =  './images/background2.jpg';
      imgText.style.textAlign = 'center';

      getTracker2.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker1.style.backgroundColor = '#ffffff';
      getTracker3.style.backgroundColor = '#ffffff';
    }

    currentImg++ ;

    
    if( currentImg > 3){
      currentImg = 1;
    }
    if( currentImg < 1){
      currentImg = 3;
    }

  }

  next.onclick = function(){
    if (currentImg == 1) {
    
      getImg.src =  "./images/background2.jpg";
      imgText.style.textAlign = 'center';

      getTracker2.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker1.style.backgroundColor = '#ffffff';
      getTracker3.style.backgroundColor = '#ffffff';
    } else if (currentImg == 2) {
      getImg.src =  './images/background3.jpg';
      imgText.style.textAlign = 'right';

      getTracker3.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker1.style.backgroundColor = '#ffffff';
      getTracker2.style.backgroundColor = '#ffffff';
    }else if (currentImg == 3) {
      getImg.src =  './images/background1.jpg';
      imgText.style.textAlign = 'left';

      getTracker1.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
      getTracker2.style.backgroundColor = '#ffffff';
      getTracker3.style.backgroundColor = '#ffffff';
    }

    currentImg++ ;

    
    if( currentImg > 3){
      currentImg = 1;
    }
    if( currentImg < 1){
      currentImg = 3;
    }

  }

  //image trackers activation

  getTracker1.onclick = function () {

      getImg.src =  "./images/background1.jpg";
      imgText.style.textAlign = 'left';

      getTracker1.style.backgroundColor = '#rgba(39, 39, 39,0.1)';
      getTracker2.style.backgroundColor = '#ffffff';
      getTracker3.style.backgroundColor = '#ffffff';

}
getTracker2.onclick = function () {

    getImg.src =  './images/background2.jpg';
    imgText.style.textAlign = 'center';

    getTracker2.style.backgroundColor = '#rgba(39, 39, 39,0.1)';
    getTracker1.style.backgroundColor = '#ffffff';
    getTracker3.style.backgroundColor = '#ffffff';
 
}
getTracker3.onclick = function () {

    getImg.src =  './images/background3.jpg';
    imgText.style.textAlign = 'right';

    getTracker3.style.backgroundColor = 'rgba(39, 39, 39,0.1)';
    getTracker1.style.backgroundColor = '#ffffff';
    getTracker2.style.backgroundColor = '#ffffff';
  
}

}

// making the previous and next button show on hover
let getImgdiv = document.querySelector('.header_img');

let getTrackers = document.querySelector('.img_tracker');

getImgdiv.onmouseover = function () {
  getDirection.style.display = 'flex';
  getTrackers.style.display = 'flex';
}
getImgdiv.onmouseout = function () {
  getDirection.style.display = 'none';
  getTrackers.style.display = 'none';
}