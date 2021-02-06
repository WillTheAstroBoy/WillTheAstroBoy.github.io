const grid = document.querySelector(".grid");
const width = 28;
let scoreDisplay = document.querySelector(".score");
let score = 0;
const squares = [];
let pacmanCurrentIndex = 489;
let pacmanDirection = 1;
let pacmanTimer;
let unScareTimer;

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]


function createGrid(){
	for(let i=0; i<width*width; i++){
		const div = document.createElement("div");
		grid.appendChild(div);
		squares.push(div);

		switch(layout[i]){
			case 0:
			squares[i].classList.add("pac-dot");
			break;
			case 1:
			squares[i].classList.add("wall");
			break;
			case 2:
			squares[i].classList.add("ghosts-lair");
			break;
			case 3:
			squares[i].classList.add("power-pellet");
			break;
			case 4:
			squares[i].classList.add("empty");
			break;
		}
	}
}

createGrid();

squares[pacmanCurrentIndex].classList.add("pacman");

document.addEventListener("keydown", (event)=> handleControl(event));

function handleControl(event){
	switch(event.keyCode){
		case 38:
		if(!squares[pacmanCurrentIndex - width].classList.contains("wall"))	
		pacmanDirection = -width;
		break;
		case 40:
		if(!squares[pacmanCurrentIndex + width].classList.contains("wall"))
		pacmanDirection = width;
		break;
		case 37:
		if(!squares[pacmanCurrentIndex - 1].classList.contains("wall"))
		pacmanDirection = -1;
		break;
		case 39:
		if(!squares[pacmanCurrentIndex + 1].classList.contains("wall"));
		pacmanDirection = 1;
		break;
	}
}

function movePacman(){
	if(!squares[pacmanCurrentIndex+pacmanDirection].classList.contains("wall")){
		squares[pacmanCurrentIndex].classList.remove("pacman");
		pacmanCurrentIndex += pacmanDirection;
		squares[pacmanCurrentIndex].classList.add("pacman");
		pacdotEaten();
		powerPelletEaten();
		checkForWin();
	}
	
}



function pacdotEaten(){
	if(squares[pacmanCurrentIndex].classList.contains("pac-dot")){
		squares[pacmanCurrentIndex].classList.remove("pac-dot");
		score++;
		scoreDisplay.textContent = score;
	}
}

function powerPelletEaten(){

	if(squares[pacmanCurrentIndex].classList.contains("power-pellet")){
		clearTimeout(unScareTimer);
		squares[pacmanCurrentIndex].classList.remove("power-pellet");
		score += 10;
		ghosts.forEach(ghost=> ghost.isScared = true);
		unScareTimer = setTimeout(unScareGhosts, 10000);
	}
}

function unScareGhosts(){
	ghosts.forEach(ghost=> { 
		squares[ghost.currentIndex].classList.remove("scared-ghost");
		ghost.isScared = false;
	});
}

pacmanTimer = setInterval(movePacman, 200);

class Ghost {
	constructor(ghostName, startIndex, speed){
		this.ghostName = ghostName;
		this.speed = speed;
		this.currentIndex = startIndex;
		this.startIndex =  startIndex;
		this.isScared = false;
		this.timerId = NaN;
	}
}


const ghosts = [

				new Ghost("inky", 348, 300),
				new Ghost("pinky", 376, 350),
				new Ghost("blinky", 351, 400),
				new Ghost("clyde", 379, 450)
			];

ghosts.forEach(ghost=> {
	squares[ghost.startIndex].classList.add(ghost.ghostName, "ghost");
	moveGhost(ghost);
});

function moveGhost(ghost){
	const directions = [1, -1, width, -width];
	let direction = directions[Math.floor(Math.random()*4)];

	ghost.timerId = setInterval(()=>{
		console.log()

		if(!squares[ghost.currentIndex+direction].classList.contains("wall") &&
			!squares[ghost.currentIndex+direction].classList.contains("ghost")
		) {
			squares[ghost.currentIndex].classList.remove(ghost.ghostName);
			squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
			ghost.currentIndex += direction;

			squares[ghost.currentIndex].classList.add(ghost.ghostName, "ghost");
		} else {
			direction = directions[Math.floor(Math.random()*directions.length)];
		}

		if(ghost.isScared){
			squares[ghost.currentIndex].classList.add("scared-ghost");
		}

		if(ghost.isScared && squares[pacmanCurrentIndex].classList.contains("ghost")){
			squares[ghost.currentIndex].classList.remove("scared-ghost");
			squares[ghost.currentIndex].classList.remove(ghost.ghostName);
			squares[ghost.currentIndex].classList.remove("ghost");
			ghost.currentIndex = ghost.startIndex;
			score += 50;
			squares[ghost.currentIndex].classList.add(ghost.ghostName, "ghost");
		} 
		checkForGameOver();
		checkForWin();

	}, ghost.speed);
}

function checkForGameOver(){
	if(squares[pacmanCurrentIndex].classList.contains("ghost") &&
		!squares[pacmanCurrentIndex].classList.contains("scared-ghost")
	){
		ghosts.forEach(ghosta=> clearInterval(ghosta.timerId))
		clearInterval(pacmanTimer);
		squares[pacmanCurrentIndex].classList.remove("pacman");
		scoreDisplay.textContent = "You Lose!";
	}
}

function checkForWin(){
	let didWin = true;
	for(let i=0; i< squares.length; i++){
		if(squares[i].classList.contains("pac-dot") ||
			squares[i].classList.contains("power-pellet")
		) {

			didWin = false;
			break;
		}
	}
	if(score >= 274 && didWin ){
		console.log("inside it");
		ghosts.forEach(ghosta=> clearInterval(ghosta.timerId))
		clearInterval(pacmanTimer);
		squares[pacmanCurrentIndex].classList.remove("pacman");
		scoreDisplay.textContent = "You Won!";
	}
}




