function togglesidebar(){
    const navbar = document.querySelector('.navbar');
    if(navbar.style.display === 'flex'){
        navbar.style.display = 'none';
    }else{
        navbar.style.display = 'flex';
    }
}
function homebutton(){
    window.location.href = "index.html";
}
function getQuery(name) {
      var urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    var videoFile = getQuery("video");
    const title = getQuery("title");

    var player = document.getElementById("player");
    document.querySelector(".title-container").innerHTML = `${title}`;
    
    player.src = "videos/" + videoFile;
