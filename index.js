const randomDice = [];
var randomNumberOne;
var randomNumberTwo;
const headerText = document.querySelector('h1');
const subText = document.querySelector('p');
const diceOne = document.querySelectorAll('img')[0];
const diceTwo = document.querySelectorAll('img')[1];
const button = document.querySelector('button');

randomDice.push("./images/dice-six-faces-one.png");
randomDice.push("./images/dice-six-faces-two.png");
randomDice.push("./images/dice-six-faces-three.png");
randomDice.push("./images/dice-six-faces-four.png");
randomDice.push("./images/dice-six-faces-five.png");
randomDice.push("./images/dice-six.png");

function randomDiceGenerator() {
	randomNumberOne = Math.floor(Math.random() * 5 + 1);
	randomNumberTwo = Math.floor(Math.random() * 5 + 1);
	diceOne.setAttribute("src", randomDice[randomNumberOne]);
	diceOne.setAttribute("alt", "Number " + randomNumberOne + " Dice");
	diceTwo.setAttribute("src", randomDice[randomNumberTwo]);
	diceTwo.setAttribute("alt", "Number " + randomNumberTwo + " Dice");
	result();
}

function result() {
	if(randomNumberOne > randomNumberTwo) {
		headerText.innerHTML = "Player 1 Win";
		subText.innerHTML = "Congratulations!";
	} else if(randomNumberOne == randomNumberTwo) {
			headerText.innerHTML = "Draw"
			subText.innerHTML = "Try again!"
	} else {
			headerText.innerHTML = "Player 2 Win";
			subText.innerHTML = "Congratulations!";
	}
}

button.onclick = randomDiceGenerator;



