function playVideo() {
	    var videoSelect = document.getElementById("v"); 
	    var selectedOption = videoSelect.options[videoSelect.selectedIndex]; 
      var videoUrl = selectedOption.value; 
      var myVideo = document.getElementById("myVideo"); 
      myVideo.src = videoUrl; 
        
    };
let foy = document.getElementById("dp");
foy.onclick=function(){
 window.open("http://192.168.0.173:8080");
}
