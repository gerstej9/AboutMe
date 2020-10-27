'use strict';

var userName = prompt('Thank you for visiting my site, what is your name?');
// console.log('Hi '+ userName+ ' it is a pleasure to e-meet you!');
alert('Hi '+ userName+ ' it is a pleasure to e-meet you!');

var waCapital = prompt ('Yes or no; Is Seattle the capital of Washington State?');
if(waCapital.toLowerCase() =='no'){
    //console.log('You are correct, Olympia is the capital of Washington State');
    alert('You are correct, Olympia is the capital of Washington State');
}
else{
    alert('I am sorry the correct answer was Olympia');
    //console.log('I am sorry the correct answer was Olympia');
}

var whatCode = prompt ('Yes or no; I used JavaScript, HTML, and CSS to design this website');
if(whatCode.toLowerCase() =='yes'){
    //console.log('You are correct, I did use JavaScript, HTML and CSS to design this page');
    alert('You are correct, I did use JavaScript, HTML and CSS to design this page');
}
else{
    alert('I am sorry the correct answer was yes I did use those languages to code this site!');
    //console.log('I am sorry the correct answer was yes I did use those languages to code this site!');
}
var snowBoard = prompt ('Yes or no; snowboarding is better than skiing');
if(snowBoard.toLowerCase() =='yes'){
    //console.log('You are correct, shredding on a board is way better!');
    alert('You are correct, shredding on a board is way better!');
}
else{
    alert('I am sorry the correct answer was snowboarding is way better!');
    //console.log('I am sorry the correct answer was snowboarding is way better!');
}
var soccerIsFun = prompt ('Yes or no; soccer is a lot of fun');
if(soccerIsFun.toLowerCase() =='yes'){
    //console.log('You are correct, soccer is a great way to get exercise and is a ton of fun!');
    alert('You are correct, soccer is a great way to get exercise and is a ton of fun!');
}
else{
    alert('I am sorry the correct answer is yes it most definitely is');
    //console.log('I am sorry the correct answer is yes it most definitely is');
}
var youAreCool = prompt ('Yes or no; you are a super cool person!');
if(youAreCool.toLowerCase() =='yes'){
    //console.log('You are correct, I am sure you are indeed a super cool person');
    alert('You are correct, I am sure you are indeed a super cool person');
}
else{
    alert('I am sorry the correct answer was you are indeed super cool');
    //console.log('I am sorry the correct answer was you are indeed super cool');
}
//console.log(userName +', thank you for playing my guessing game. Please enjoy my website!');
alert(userName +', thank you for playing my guessing game. Please enjoy my website!');