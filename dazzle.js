(function() {
   
    var angles = ["45", "135", "30", "60", "120", "150"];
    
    var divs = document.getElementsByTagName("div");
    
    for (var i = 0; i < divs.length; i++) {   
        var angle = angles[Math.floor(Math.random()*angles.length)];
        var width = Math.floor((Math.random()*20))+30;
        
        divs[i].setAttribute("style","background-color:red; background-image: -moz-repeating-linear-gradient("+angle+"deg, transparent, transparent "+width+"px, rgba(255,255,255,1) "+width+"px, rgba(255,255,255,1) 70px); background-image: -webkit-repeating-linear-gradient("+angle+"deg, transparent, transparent "+width+"px, rgba(255,255,255,1) "+width+"px, rgba(255,255,255,1) 70px);");
        
    }
})()
