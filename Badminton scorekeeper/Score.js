const maxScore = document.querySelector('#ptChoice');
const Player1Score = document.querySelector('#Player1');
const Player2Score = document.querySelector('#Player2');
const P1increase = document.querySelector('#button1');
const P2increase = document.querySelector('#button2');
const reset = document.querySelector('#button3');
let Max = 0;
let Score1 = 0,
    Score2 = 0;

const onFinish = () => {
    P1increase.disabled = 'true';
    P2increase.disabled = 'true';
    P1increase.style.color = '#ecdebf';
    P2increase.style.color = '#b7d1ec';
}

const onReset = () => {
    Score1 = 0;
    Player1Score.textContent = Score1;
    Score2 = 0;
    Player2Score.textContent = Score2;
    maxScore.value = 'init';
    Max = 0;
    Player1Score.style.color = 'Black';
    Player2Score.style.color = 'Black';
    P1increase.disabled = null;
    P2increase.disabled = null;
    P1increase.style.color = 'white';
    P2increase.style.color = 'white';
}

maxScore.addEventListener('input', () => {
    Max = maxScore.value;
})

reset.addEventListener('click', onReset);

P1increase.addEventListener('click', () => {
    if (Score1 < Max && Score2 < Max) {
        Score1 += 1;
        Player1Score.textContent = Score1;
        if (Score1 == Max) {
            Player1Score.style.color = 'Green';
            Player2Score.style.color = 'Red';
            onFinish();
        }
    }
})

P2increase.addEventListener('click', () => {
    if (Score1 < Max && Score2 < Max) {
        Score2 += 1;
        Player2Score.textContent = Score2;
        if (Score2 == Max) {
            Player1Score.style.color = 'Red';
            Player2Score.style.color = 'Green';
            onFinish();
        }
    }
})