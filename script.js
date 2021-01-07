//number game
var secretNumber=Math.trunc(Math.random()*21);
//document.querySelector('.number').textContent=secretNumber;
var score=20;
var highScore=20;
let playing=true;


//check btn
var checkBtn=document.querySelector('.check');
checkBtn.addEventListener('click',checkFunction);
 function checkFunction()
{  if(playing){
    var guessNumber=document.querySelector('.guess').value;
    if(!guessNumber){
        document.querySelector('.message').textContent='no number';
    }
    else if(guessNumber==secretNumber){
        document.querySelector('.message').textContent='Correct Number!!';
        document.querySelector('body').style.backgroundColor='orangered';

    }
    else{
        document.querySelector('.message').textContent=(guessNumber>secretNumber) ? 'Too High!!' : 'Too Low!!';
        score--;
        highScore--;
        document.querySelector('.score').textContent= score;
        document.querySelector('.highScore').textContent= highScore;
    }
    if(score==0){
        document.querySelector('.message').textContent='You lost the game!!';
        document.querySelector('.guess').value="";
        playing=false;
    }
}}

//Again btn 
var againBtn=document.querySelector('.again');
againBtn.addEventListener('click',again)
function again(){
    playing=true;
    score=20;
    highScore=0;
    checkFunction();
    document.querySelector('.score').textContent=20;
    document.querySelector('.highScore').textContent=0;
    document.querySelector('.guess').value="";
    document.querySelector('.message').textContent='Start guessing....';
    document.querySelector('body').style.backgroundColor='#222';
    
}