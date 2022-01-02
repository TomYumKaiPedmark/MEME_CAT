var img = document.getElementById("mhk");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio('pop.mp3');

// mouseclick event
img.addEventListener("mousedown", function() {
    increaseScore();
    img.src = '002.jpg';
    audio.play();
});

img.addEventListener("mouseup", function() {
    img.src = '001.jpg';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function() {
    increaseScore();
    img.src = '002.jpg';
    audio.play();
});

img.addEventListener("touchmove", function() {
    img.src = '001.jpg';
    audio.play();
});

function increaseScore() {
    score++;
    count.innerHTML = score;
    document.innerHTML = score;
}