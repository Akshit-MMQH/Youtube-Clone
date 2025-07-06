function togglesidebar(){
    const navbar = document.querySelector('.navbar');
    if(navbar.style.display === 'flex'){
        navbar.style.display = 'none';
    }else{
        navbar.style.display = 'flex';
    }
}

function homebutton(){
    window.location.href = "1 yt clone.html";
}

var thumbnails = document.querySelectorAll('.image-container');

function playVideo() {
  var videoName = this.getAttribute('data-name');

  const title = this.getAttribute("data-title");
  const encodedTitle = encodeURIComponent(title);

  window.location.href = "1yt video player.html?video=" + videoName + ".mp4&title=" + encodedTitle;

}
for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('click', playVideo);
}

  
