'use strict';

var correctAnswer = 0;
var userName = 'James';

function greeting(){
    userName = prompt('Thank you for visiting my site, what is your name?');
    // console.log('Hi '+ userName+ ' it is a pleasure to e-meet you!');
    alert('Hi '+ userName+ ' it is a pleasure to e-meet you!');
}

function questionOne(){
    var waCapital = prompt ('Yes or no; Is Seattle the capital of Washington State?');
    if(waCapital.toLowerCase() =='no' || waCapital.toLowerCase() == 'n'){
        //console.log('You are correct, Olympia is the capital of Washington State');
        alert('You are correct, Olympia is the capital of Washington State');
        correctAnswer++
    }else{
        alert('I am sorry the correct answer was Olympia');
        //console.log('I am sorry the correct answer was Olympia');
    }
}

function questionTwo(){
    var whatCode = prompt ('Yes or no; I used JavaScript, HTML, and CSS to design this website');
    if(whatCode.toLowerCase() =='yes' || whatCode.toLowerCase()== 'y'){
        //console.log('You are correct, I did use JavaScript, HTML and CSS to design this page');
        alert('You are correct, I did use JavaScript, HTML and CSS to design this page');
        correctAnswer++
    }else{
        alert('I am sorry the correct answer was yes I did use those languages to code this site!');
        //console.log('I am sorry the correct answer was yes I did use those languages to code this site!');
    }
}

function questionThree(){
    var snowBoard = prompt ('Yes or no; snowboarding is better than skiing');
    if(snowBoard.toLowerCase() =='yes' || snowBoard.toLowerCase() =='y'){
        //console.log('You are correct, shredding on a board is way better!');
        alert('You are correct, shredding on a board is way better!');
        correctAnswer++
    }else{
        alert('I am sorry the correct answer was snowboarding is way better!');
        //console.log('I am sorry the correct answer was snowboarding is way better!');
    }
}

function questionFour(){
    var soccerIsFun = prompt ('Yes or no; soccer is a lot of fun');
    if(soccerIsFun.toLowerCase() =='yes' || soccerIsFun.toLowerCase() == 'y'){
        //console.log('You are correct, soccer is a great way to get exercise and is a ton of fun!');
        alert('You are correct, soccer is a great way to get exercise and is a ton of fun!');
        correctAnswer++
    }else{
        alert('I am sorry the correct answer is yes it most definitely is');
        //console.log('I am sorry the correct answer is yes it most definitely is');
    }
}

function questionFive(){
    var youAreCool = prompt ('Yes or no; you are a super cool person!');
    if(youAreCool.toLowerCase() =='yes' || youAreCool.toLowerCase() =='y'){
        //console.log('You are correct, I am sure you are indeed a super cool person');
        alert('You are correct, I am sure you are indeed a super cool person');
        correctAnswer++
    }else{
        alert('I am sorry the correct answer was you are indeed super cool');
        //console.log('I am sorry the correct answer was you are indeed super cool');
    }
}


function questionSix(){
    var Number = Math.floor(Math.random()*10)+1;
    // console.log(Number)
    var guessNumber = parseInt(prompt('Please guess a number between 1-10'));
    for(var i = 0; i < 3; i++){
        if (guessNumber === Number){
            alert('Congratulations! '+ Number+ ' was the correct answer!');
            i = 3;
            correctAnswer++
        }else if (guessNumber > Number){
            alert('Too high please try again');
            guessNumber = prompt('Please guess a number between 1-10');
        }else if(guessNumber < Number){
            alert('Too low please try again');
            guessNumber = prompt('Please guess a number between 1-10');
        }else{
            alert('I am sorry that is not a valid guess');
            guessNumber = prompt('Please guess a number between 1-10');
        }
        if(i === 2 && guessNumber === Number){
            alert('Congratulations! '+ Number+ ' was the correct answer!');
        }else if (i === 2 && guessNumber !== Number){
            alert('I am sorry you have run out of guesses, the correct answer was '+ Number);
        }

    }
}

function questionSeven(){
    var favAnimal = ['falcon', 'dragon', 'crow', 'squirrel', 'cat'];
    //console.log(favAnimal);
    var guessAnimal = prompt('Please guess one of my five favorite animals').toLowerCase();
    //console.log(guessAnimal);
    for (var i = 0; i < 6; i++){
        for (var j =0; j <favAnimal.length; j++ ){
            //console.log(favAnimal.length);
            if(guessAnimal === favAnimal[j]){
                alert('Congratulations you guessed one of my five favorite animals! These include cat, dragon, crow, squirrel, and falcon');
                guessAnimal = false
                j = 5;
                //console.log(j);
            }
        }
        //console.log(guessAnimal);
        //console.log(favAnimal);
        if(guessAnimal == false){
            correctAnswer++
            i = 6;
            //console.log(i);
        }
        else if (guessAnimal !== favAnimal && i !=5){
            var guessAnimal = prompt('I am sorry try again, please guess one of my five favorite animals.').toLowerCase();
        } else if (i = 5){
            prompt('I am sorry you have run out of guesses, the correct answers were cat, dragon, crow, squirrel, and falcon');
        }
    }   
}

function finalGreeting(){
alert(userName +', thank you for playing my guessing game. You got '+ correctAnswer +' out of 7 questions right! Please enjoy my website!');
//console.log(userName +', thank you for playing my guessing game. Please enjoy my website!');
}

function runJava(){
    greeting();
    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();
    questionSix();
    questionSeven();
    finalGreeting();
}

runJava();