//Array of question objects
var quizArray = [
    {
        q:'During WWII one of the most famous codes was broken at Bletchley Park. What code was it?',
        a:'Edelweiss',
        b:'Secret Hitler',
        c:'Enigma Code',
        d:'German Mystery',
        correctAnswer:'c'
    },
    {
        q:'An encoding that represents text in computers, telecommunications equipment, and other devices is called what?',
        a:'ASCII',
        b:'Mathematical',
        c:'BigFoot',
        d:'Java',
        correctAnswer:'a'
    },
    {
        q:'What you can use to iterate in a array?',
        a:'If statement',
        b:'For loop',
        c:'Santa',
        d:'Pyton',
        correctAnswer:'b'
    },
    {
        q:'What method you can use to convert a content to strings before to save in the local storage?',
        a:'localStorage.setItem()',
        b:'JSON.stringfy()',
        c:'JOHN.stringfy()',
        d:'I command you to save this thing as string',
        correctAnswer:'b'
    },
    {
        q:'What you can use to make your app look nice in mobiles?',
        a:'Javascript',
        b:'DOM',
        c:'Media Queries',
        d:'Crayons',
        correctAnswer:'c'
    }
];

//Useful variables
var arrayScores = [];

var timeLeft = 75;

var score = 0;

var index = 0;

var stopTimer = false;

var footer = document.querySelector('footer');

var divScreen = document.querySelector('main');

var startScreen = '<div id="start-screen" class="start-screen"><h1>Code Quiz Chalenge</h1><p>This is a code quiz chalenge. Answer the questions before the time runs out. Every time you answer incorrectly you will be penalized by 10 seconds. The seconds remaining after you are done will be your score.</p><button id="start-button" class="hover start-button" type="button">Start</button></div><footer></footer>'

var form;

var endLoop = false;

var highScoresLink = document.getElementById("my-link");

var header = document.querySelector('header');

var timer;
 
//Function that treats clicks and buttons
var buttonHandler = function(event) {
   event.preventDefault();
    var target = event.target;
    var button = document.getElementById(target.id);
    if(button.type === "button"){
        if(button.id === "start-button"){
            stopTimer = false;
            timeLeft = 75;
            countDown();
            displayQuestion(index);
            index++;
        }
         else{   
            checkAnswer(button);
                if(index < quizArray.length){
                    displayQuestion(index);
                    index++;
                }
                else {
                    stopTimer = true;
                    score = timeLeft;
                    saveScoreForm(score);
                }
            }
        }
        else if(button.type === "submit"){
            if(button.id === "submit"){
            var check = scoreStorage();
            console.log(check);
                if(check){
            showHighScores();
                }
            }
            if(button.id === "go-back" || button.id === "try-again"){
                endLoop = false;
                index = 0;
                divScreen.innerHTML = startScreen;
            }
            if(button.id === "clean"){
                localStorage.clear();
                showHighScores();
                endLoop = true;
            }
            if(button.id === "my-link"){
                showHighScores();
                stopTimer = true;
                footer.innerHTML = "";
             }
        }
        
        else {
            return false;
        }
}

// Timer function
function countDown(){
    timer = setInterval(function(){
        if(timeLeft<0){
            timeLeft=0;
        }
    document.getElementById('timer').innerHTML = 'Time: ' + timeLeft;
    if(timeLeft <= 0){
        clearInterval(timer);
        footer.innerHTML = "<h1>GAME OVER!</h1>";
    }
    if(stopTimer === true){
        clearInterval(timer);
    }
   
    timeLeft--;
}, 1000);
}

//Function to change the page's content dynamically showing questions objects in the array
function displayQuestion(i){

    btnA =' <button id="a" class="hover button" type="button">'+ quizArray[i].a + '</button>'
    btnB =' <button id="b" class="hover button" type="button">'+ quizArray[i].b + '</button>'
    btnC =' <button id="c" class="hover button" type="button">'+ quizArray[i].c + '</button>'
    btnD =' <button id="d" class="hover button" type="button">'+ quizArray[i].d + '</button>'

   divScreen.innerHTML = '<div id = "start-screen" class="start-screen"><h1>'+ quizArray[i].q + "</h1><ul><li>"+ btnA + "</li><li>"+ btnB + "</li><li>"+ btnC + "</li><li>"+ btnD + "</li></ul></div>";
   a
}

//Function to compare the user answer with the corret one
function checkAnswer(answer){

     if(answer.id != quizArray[index-1].correctAnswer){
       timeLeft = timeLeft - 10;
       footer.innerHTML = "<h1>WRONG</h1>";
        
    }
    else if(answer.id === quizArray[index-1].correctAnswer){
        footer.innerHTML = "<h1>CORRECT</h1>";
    }
     
}

//function to show save score form
function saveScoreForm(num){
    //Don' let the score be less than 1
    if(score < 1){
        divScreen.innerHTML = '<div id="start-screen" class="start-screen"><h1>LOSER!</h1><button id="try-again" class="hover start-button" type="submit">Try Again</button>';
    }
    else {
    var submitButton = '<button id="submit" class="hover start-button" type="submit" />';
    var name = '<input id ="inicials" type="text" name="name" placeholder="" />'
    divScreen.innerHTML = '<div id = "submit-score" class="start-screen form"><h1>All Done!</h1><h3>Your final Score is '+ num +'!</h3><h3>Enter inicials:'+ name + '</h3>' + submitButton + 'Submit</button></div>' 
    } 
}

//Saves the score and inicials of the player at the local storage
var scoreStorage = function (){
    var scoreEl = {
        score:0,
        inicials:"",
    }
    var check;
    var inicials = document.getElementById("inicials").value;
    if(inicials){
    var ini = inicials.toUpperCase();
    scoreEl.score = score;
    scoreEl.inicials = ini;
    arrayScores.push(scoreEl);
    localStorage.setItem("scores",JSON.stringify(arrayScores));
    check = true;
    }
    //Don't let a score with no inicials go to the table
    else{
        alert("You forgot to type your inicials!");
        check = false;
    }
    return check;
}

//Ordenates the array of scores from the largest to the smallest 
function compare(a, b) {
    var comparison = 0;
    if (a.score < b.score) {
      comparison = 1;
    } else if (a.score > b.score) {
      comparison = -1;
    }
    return comparison;
  }

//Creates a table with the scores getting from the local storage
function showHighScores(){
    var goBackButton = '<button id="go-back" class="hover start-button scores-button" type="submit" />';
    var cleanScores = '<button id="clean" class="hover start-button scores-button" type="submit" />';
    var tableScores = '<table><tr><th>Name Inicials</th><th>Score</th></tr>';
    var readScores = localStorage.getItem("scores");
    var parseScores = JSON.parse(readScores);
    //Treats the cases of having nothing to show, having just one element or having more than one
    if (!parseScores){
        tableEls = "<h2>No scores saved!</h2>"
    }
    //If the array's length is bigger than 1, ordenates the scores 
    else if(parseScores.length > 1){
    parseScores.sort(compare);
     var tableEls = "";
     parseScores.forEach(element => {
    tableEls = tableEls + "<tr><td>"+ element.inicials + "</td><td>" + element.score + "</td></tr>"  
    });
    }  
    else{
        tableEls = "<tr><td>"+ parseScores[0].inicials + "</td><td>" + parseScores[0].score + "</td></tr>"
    }
    footer.innerHTML = "";
    divScreen.innerHTML = '<div id = "high-scores" class="start-screen"><h1>High Scores</h1></div><div class = "high-scores">'+ tableScores + tableEls + goBackButton + 'Go Back</button>' + cleanScores + 'Clean Scores</button></div>';
}

//Iniciates a loop by clicking on the start button or going to the high scores link
if(endLoop === false){
    divScreen.addEventListener("click",buttonHandler);
    header.addEventListener("click", buttonHandler);
}