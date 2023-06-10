const btnNew = document.querySelector('.btn--new'),
btnRoll = document.querySelector('.btn--roll'),
btnHold = document.querySelector('.btn--hold');

const diceImg = document.querySelector('.dice');

diceImg.style.display = 'none';

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0]

function gameOver (){
    return true
}

function scoreEd() {
    currentScore = 0;
    document.getElementById(
        `current--${activePlayer}` , 
    ).textContent = currentScore ;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
}

btnRoll.addEventListener('click', (e) =>{
   if(gameOver) {e.preventDefault()

    diceImg.style.display = 'block';
    const random = Math.floor(Math.random()* 6 + 1);
    console.log(random);
    diceImg.src = `./dice-${random}.png`;

    if (random !== 1) {
        currentScore += random;
        document.getElementById(
            `current--${activePlayer}` , 
        ).textContent = currentScore
        
    }else {
       scoreEd()
    }}

})


btnHold.addEventListener('click', ()=> {
  if(gameOver) { score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = 
        score[activePlayer]
        if (score[activePlayer] >= 100){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            gameOver = false
        }
        else {
            scoreEd()
        }
    }

})


btnNew.addEventListener('click', ()=> {
    gameOver = true;
    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    document.getElementById('current--0').textContent = 0
    document.getElementById('current--1').textContent = 0
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
})