'use strict';

var secretValue=Math.trunc(Math.random()*20)+1;
var score=20;
let guessed=false;

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    guessed=false;
    secretValue=Math.trunc(Math.random()*20)+1;
    document.querySelector('.guessvalue').textContent='?';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.scorevalue').textContent=20;
    document.querySelector('body').style.
    backgroundColor='#222';
    document.querySelector('.guessvalue').style.
    width='140px';
    document.querySelector('.numguess').value=null;
    }
);

document.querySelector('.check').addEventListener('click', function(){
    const num=Number(document.querySelector('.numguess').value);
    if(!guessed){
        if(score>1){
            if(!num) document.querySelector('.message').textContent='⛔ No Number...';
            else if(num==secretValue){
                guessed=true;
                document.querySelector('body').style.
                backgroundColor = 'yellow';
                document.querySelector('.guessvalue').style.
                width='20rem';
                document.querySelector('.message').textContent='🎊 Correct!';
                document.querySelector('.guessvalue').textContent=secretValue;
                let highscore=Number(document.querySelector('.highscorevalue').textContent);
                if(score>highscore) highscore=score;
                document.querySelector('.highscorevalue').textContent=highscore;             
            }
            else if(num>secretValue){
                document.querySelector('.message').textContent='👆 TOO HIGH!';
                score--;
                document.querySelector('.scorevalue').textContent=score;
            }
            else{ 
                document.querySelector('.message').textContent='👇 TOO LOW!';
                score--;
                document.querySelector('.scorevalue').textContent=score;
                }
            }
            else document.querySelector('.message').textContent='💣 You Lost!', document.querySelector('.scorevalue').textContent=0,
            document.querySelector('body').style.backgroundColor='darkred',
            document.querySelector('.guessvalue').textContent=secretValue;
        }
    }
);