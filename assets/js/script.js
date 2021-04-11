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

var timeLeft = 75;

var score = 0;

var index = 0;

var stopTimer = false;

var footer = document.querySelector('footer');

var divQuestions = document.querySelector("#start-screen");

var buttonHandler = function(event) {
    var target = event.target;
    var button = document.getElementById(target.id);
    if(button.id === "start-button"){
        countDown();
        displayQuestion(index);
        index++;
    }
    else{   
            if(index < quizArray.length){
            displayQuestion(index);
            checkAnswer(button);
            index++;
            }
            else {
                score = timeLeft;
                stopTimer = true;
             }
        }
    }

function countDown(){
    var timer = setInterval(function(){
    document.getElementById('timer').innerHTML = 'Time: ' + timeLeft;
    if(timeLeft === 0 || stopTimer === true){
        clearInterval(timer);
        footer.innerHTML = "<h1>GAME OVER!</h1>";
    }
   
    timeLeft--;
}, 1000);
}

function displayQuestion(i){

    btnA =' <button id="a" class="button" type="button">'+ quizArray[i].a + '</button>'
    btnB =' <button id="b" class="button" type="button">'+ quizArray[i].b + '</button>'
    btnC =' <button id="c" class="button" type="button">'+ quizArray[i].c + '</button>'
    btnD =' <button id="d" class="button" type="button">'+ quizArray[i].d + '</button>'

   divQuestions.innerHTML = '<div id = "question"><h1>'+ quizArray[i].q + "</h1><ul><li>"+ btnA + "</li><li>"+ btnB + "</li><li>"+ btnC + "</li><li>"+ btnD + "</li></ul></div>";
   divQuestions = document.querySelector("#question");
}

function checkAnswer(answer){

     if(answer.id != quizArray[index-1].correctAnswer){
        footer.innerHTML = "<h1>WRONG!</h1>";
        timeLeft = timeLeft - 10;
    }
    else if(answer.id === quizArray[index-1].correctAnswer){
        footer.innerHTML = "<h1>CORRECT!</h1>";
    }
   
}
 
    divQuestions.addEventListener("click",buttonHandler);
     
