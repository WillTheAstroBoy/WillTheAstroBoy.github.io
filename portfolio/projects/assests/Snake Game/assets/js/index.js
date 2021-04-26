const grid = document.querySelector(".grid");
const startBtn = document.querySelector(".startBtn");
const score = document.querySelector(".score");
const resetBtn = document.querySelector(".resetBtn");

let currentScore = 0;
const squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let gameOver = false;
let giveApple = true;
let food;
let speed = 400;
let myInterval;


function createBoard(){
	for(let i=0; i<400; i++){
		const square = document.createElement("div");
		square.classList.add("square");
		squares.push(square);
		grid.appendChild(square);
	}
}
createBoard();
currentSnake.forEach((index) =>squares[index].classList.add("snake"));

function checkGameOver(pos){
	if(pos%20 === 0  && direction === -1){
		gameOver = true;
	} else if(pos+direction < 0  ){
		gameOver = true;
	} else if(pos+direction > 399 ){
		gameOver = true;
	} else if((pos+1)%20 === 0 && direction === 1){
		gameOver = true;
	} else {
		for(let i=0; i<currentSnake.length; i++){
			if(pos+direction === currentSnake[i]){
				gameOver = true;
			}
		}
	}
}

function move() {
	const tail = currentSnake.pop();
	checkGameOver(currentSnake[0]);
	
	if(gameOver){
		score.textContent = "Game Over!";
		stopInterval();
	} else {
		if(giveApple){
			foodMaker();
		} else {
			if(currentSnake[0]+direction === food){
				squares[food].classList.remove("apple");
				squares[food].classList.add("snake");
				giveApple = true;
				currentSnake.push(tail);
				speed *= 0.95;
				currentScore += 10;
				score.textContent = "Score:"+ currentScore;
				clearInterval(myInterval);
				myInterval = setInterval(move, speed);
			}
		}
		
		squares[tail].classList.remove("snake");
		currentSnake.unshift(currentSnake[0] + direction);
		squares[currentSnake[0]].classList.add("snake");		
	}	
}

startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", (event)=> handleInput(event));
resetBtn.addEventListener("click", resetGame);
document.querySelector(".btn-up").addEventListener("click", (event)=> {direction != 20 ? direction = -20 : null});
document.querySelector(".btn-down").addEventListener("click", (event)=> direction != -20 ? direction = 20 : null);
document.querySelector(".btn-right").addEventListener("click", (event)=> direction != -1 ? direction = 1 : null );
document.querySelector(".btn-left").addEventListener("click", (event)=> direction != 1 ? direction = -1  : null);




function handleInput(event){
	const input = event.code;
	
	if(input === "ArrowLeft"){
		if(direction != 1){
			direction = -1;
		}
	} else if(input === "ArrowRight"){
		if(direction != -1){
			direction = 1;
		}
	} else if(input === "ArrowUp" ){
		if(direction != 20){
			direction = -20;
		}
	} else if(input === "ArrowDown" ){
		if(direction != -20){
			direction = 20;
		}
	}
}

function startGame(){
	myInterval = setInterval(move, speed);
	startBtn.style.display = "none";
	resetBtn.style.display = "block";
}

function stopInterval(){
	clearInterval(myInterval);
}

function foodMaker(){
	

	do{
		food = Math.floor(Math.random()*400)+1;

	} while(squares[food].classList.contains("snake")){
		squares[food].classList.add("apple");
		giveApple = false;
	}
}

function resetGame(){
	currentSnake = [2, 1, 0];
	currentScore = 0;
	resetBtn.style.display = "none";
	startBtn.style.display = "block";
	score.textContent ="Score: 0";
	direction = 1;
	gameOver = false;
	giveApple = true;
	food = null;
	speed = 400;
	squares.forEach((div)=> {
		div.classList.remove("snake", "apple");
	});
	currentSnake.forEach((index) => squares[index].classList.add("snake"));
	stopInterval();
}