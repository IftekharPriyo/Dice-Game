var scores, roundScores, activePlayer, gamePlaying;

function init(){

     scores = [0,0];
     roundScore = 0;
     activePlayer = 0;
     gamePlaying = true;

     document.querySelector('.dice').style.display = 'none';
     document.getElementById('score-0').textContent = '0';
     document.getElementById('score-1').textContent = '0';
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
     document.querySelector('#name-0').textContent = 'Player 1';
     document.querySelector('#name-1').textContent = 'Player 2';
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');

}

init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
         //generating random number
    var dice = Math.floor(Math.random()*6)+1;
    
    //display number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //update score
    if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    } else{
        //next player
        nextPlayer();
    }
    }
    
   
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
        //add current score to global score
    scores[activePlayer] += roundScore;
       
    //updat the UI 
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
    //check if player won the game
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;
    } else{
    nextPlayer();
    }
    }
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent ='0'
        document.getElementById('current-1').textContent ='0'
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        
}

document.querySelector('.btn-new').addEventListener('click',init);









