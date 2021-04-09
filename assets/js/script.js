var quizArray = [
    {
        q:""
    }
];
var startBtn = document.getElementById('start-button');

function countDown(){
var timeLeft = 75;    
var timer = setInterval(function(){
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;
    if(timeLeft === 0){
        clearInterval(timer);
        displayReport();
    }
    timeLeft--;
}, 1000);
}

startBtn.onclick = countDown;