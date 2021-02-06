const width = 55;
const height = 30;
const squares = [];
let createWallTimer;
let timer;
let score = 0;




const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");

function makeGrid(){
	for(let i=0; i< width*height; i++){
		const div = document.createElement("div");
		grid.appendChild(div);
		squares.push(div);
	}
}


function makeWall(){
	let random = (Math.floor(Math.random()*24)+1);
	console.log(random);
	let startIndex = 54;
	for(let i=0; i< 30; i++){
		if(i < random  || i > random+6){
			squares[startIndex].classList.add("wall");		
		}
		startIndex+= 55;
	}
}

function makeBox(){
	let startIndex = (7*55);
	for(let i=0; i<4; i++){
		let temp = startIndex;
		for(let j=0; j<4; j++){
			squares[temp].classList.add("box");
			temp++;
		}
		startIndex+= 55;
	}
}

function moveWall(){
	score += 1;
	scoreDisplay.textContent = score;
	if(!squares[0].classList.contains("wall")){
		for(let i=0;i < squares.length; i++){
			if (squares[i].classList.contains("wall")) {
				squares[i-1].classList.add("wall");
				squares[i].classList.remove("wall");
			}
		}
		console.log("moveWall");
		checkForGameOver();
	} else {
		for(let i=0; i< squares.length; i+=55){
			if(squares[i].classList.contains("wall")){
				squares[i].classList.remove("wall");
				console.log("removing wall")
			}
		}
	}
	
}

function checkForGameOver(){
	for(let i=0; i< squares.length; i++){
		if(squares[i].classList.contains("wall") && i != 0){
			if (squares[i-1].classList.contains("box")) {
				clearInterval(timer);
				clearInterval(createWallTimer);
				removeEventListener("keydown", event=> moveBox(event));
				console.log("game over");
			}
		}
	}
}

function moveBox(event){
	let direction;
	switch(event.keyCode){
		case 38:
		direction = -55;
		break;
		case 40:
		direction = 55;
		break;
	}
	if(direction === -55){
		if(!squares[0].classList.contains("box")){
			for(let i=0; i< squares.length; i++){
				if(squares[i].classList.contains("box")){
					squares[i+direction].classList.add("box");
					squares[i].classList.remove("box");
				}
			}
		}
	} else {

		if(!squares[(width*height)-54].classList.contains("box")){
			for(let i=0; i< squares.length; i++){
				if(squares[i].classList.contains("box")){
					for(let j=i; j<i+6; j++){
						squares[j].classList.remove("box");
					}

					for(let j=0; j<4; j++){
						squares[i+55*4+j].classList.add("box");
					}
					break;
				}
			}
		}
	}
}


makeGrid();
makeWall();
createWallTimer = setInterval(makeWall, 6000);
makeBox();
timer = setInterval(moveWall, 300);

document.addEventListener("keydown", event=> moveBox(event));