# Projects related to DOM

## project link 
[Click Here](#project-link)

# Solution Code

## project 1

```JavaScript
console.log("vikram")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
  });
});





```



## project 2

```JavaScript



const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
//stop (submit) defualt action of form

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
     if(bmi==18.6 || bmi < 18.6){
       results.innerHTML=`Your Bmi is:${bmi}\n you are underweight`;
    }
    else if(bmi>18.6 && bmi<24.9){
      results.innerHTML=`Your BMI is:${bmi}\n which is in normal range, so don't you worry`
    }
    else{
      results.innerHTML=`Your Bmi is:${bmi}\n oh-oh you are overweight`
    }
  }
    
});

```

## project 3

```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4

```javascript
// console.log(parseInt(Math.random() * 100 + 1));

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); //we take class in dot 

const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a valid number more than 1')
    }else if(guess > 1000){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GAME OVER.Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
    displayMessage('You guessed it right')
    endGame()
    } else if(guess < randomNumber){
        displayMessage('Number is Tooo Low')
    }else if(guess > randomNumber){
        displayMessage('Number is Tooo High')
}
}


function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML  += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p); playGame = true;
    })
}

```

## project 5

```javascript


```


