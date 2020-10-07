// JavaScript Document
var index = 1;
showVideoSlides(index);
plusSlides(index);

function plusSlides(ind) {
    showVideoSlides(index += ind);
}

function showVideoSlides(ind) {
    var videos = document.getElementsByClassName("videos");
    var title = document.getElementsByClassName("highlightTitle");
    if (ind > videos.length) { //loop back to beginning
        index = 1
    }
    
    if (ind < 1) {
        index = videos.length //loop to end
    }
    
    for (var i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    
    for (i = 0; i < videos.length; i++) {
        title[i].style.display = "none";
    }
    
    videos[index-1].style.display = "block";
    title[index-1].style.display = "block";
}