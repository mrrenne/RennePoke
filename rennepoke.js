var score = 0;
var level = 1;
var aWidth;
var aHeight;
var timer;
function detectHit(){
    score += 1;
    scoreText.innerHTML = "Score: " + score;
}
function setGameAreaBounds(){
    if(document.all){
        aWidth = document.body.clientWidth;
        aHeight = document.body.clientHeight;
    }else{
        aWidth = innerWidth;
        aHeight = innerHeight;
    }
    aWidth -= 20;
    aHeight -= 90;
    document.getElementById("gameArea").style.width = aWidth;
    document.getElementById("gameArea").style.height = aHeight;
    aWidth -= 110;
    aHeight -= 110;
    moveLogo();
}
function moveLogo(){
    var x = Math.floor(Math.random()*aWidth);
    var y = Math.floor(Math.random()*aHeight);
    if(x<10)
        x = 10;
    if(y<10)
        y = 10;
    document.getElementById("logo").style.left = x;
    document.getElementById("logo").style.top = y;
    clearTimeout(timer);
    timer = setTimeout("moveLogo()",1000);
}