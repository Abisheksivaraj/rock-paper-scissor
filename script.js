// select an html element in js//

const ScoreoneEl= document.getElementById('score-one');

const ScoretwoEl= document.getElementById('score-two');

const userChoiceEl= document.getElementById('userResultDisplay');

const compChoiceEl= document.getElementById('computerResultDisplay');

const gameResultEl= document.getElementById('game-result');

const resultContainer = document.querySelector('.result-container');

const wonEl = document.querySelector('.won');

const lostEl = document.querySelector('.lost');

const younumberEl = document.querySelector('.number');

const computernumberEl = document.querySelector('.num-one');

const replayEl = document.querySelector('.play-again');

const closeEl = document.querySelector('.close');

const gamerulesEl = document.querySelector('.game-rules');








// user choice//


//global variables//
let result = '';
let currentScore = 0;
let compscore = 0;

//generate computer choice//
function getComputerChoice(){
  const weapons=['rock', 'paper', 'scissors'];
  const randomNumber = Math.trunc(Math.random()*weapons.length);

  return weapons[randomNumber];
}

//get results//
function playGame(userChoice){

  const compChoice = getComputerChoice();

  if(userChoice === compChoice){
    result = 'draw';
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice ==='scissors' && compChoice === 'paper')
  ){
    currentScore = currentScore+1;
    result = 'Won';
    
  }else{
    compscore = compscore +1;
    result ='Lost';
  
  } 
    resultContainer.style.display = 'flex';
    userChoiceEl.innerText = userChoice;
    compChoiceEl.innerText = compChoice;
    younumberEl.innerText = currentScore;
    computernumberEl.innerText = compscore;
    console.log(currentScore);
    if(currentScore === 5){
      gameResultEl.style.display = 'flex';
      wonEl.style.display = 'flex';
      replayEl.style.display = 'block';
    }else if(compscore === 5){
      gameResultEl.style.display = 'flex';
      lostEl.style.display = 'flex';
      replayEl.style.display = 'block';
    }
}
function playAgain(){
  currentScore = 0;
  compscore = 0;
  younumberEl.innerText = 0;
  computernumberEl.innerText = 0;
  resultContainer.style.display = 'none';
  gameResultEl.style.display = 'none';
  wonEl.style.display = 'none';
  lostEl.style.display = 'none';
}
