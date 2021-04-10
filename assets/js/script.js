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

var divQuestions = document.querySelector("#start-screen");

var startBtn = document.getElementById('start-button');

function countDown(){
    displayQuestions();
    var timeLeft = 75;    
    var timer = setInterval(function(){
    document.getElementById('timer').innerHTML = 'Time: ' + timeLeft;
    if(timeLeft === 0){
        clearInterval(timer);
        displayReport();
    }
    timeLeft--;
}, 1000);
}

function displayQuestions(){
    var bntA =' <button id="bntA" class="button" type="button">'+ quizArray[1].a + '</button>'
    var bntB =' <button id="bntA" class="button" type="button">'+ quizArray[1].b + '</button>'
    var bntC =' <button id="bntA" class="button" type="button">'+ quizArray[1].c + '</button>'
    var bntD =' <button id="bntA" class="button" type="button">'+ quizArray[1].d + '</button>'

   divQuestions.innerHTML = "<div><h1>"+ quizArray[0].q + "</h1><ul><li>"+ bntA + "</li><li>"+ bntB + "</li><li>"+ bntC + "</li><li>"+ bntD + "</li></ul></div>";
    
}

startBtn.onclick = countDown;