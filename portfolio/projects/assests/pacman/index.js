


const grid = document.querySelector(".grid");
let gridArray;
let direction = 1;
let pacPos = 228;
let timer;
let inkyPos = 147;
let pinkyPos = 151;
let clydePos = 167; 
let mineyPos = 171;
let inkyDir = 0;
let pinkyDir = 0;
let clydeDir = 1;
let mineyDir = 1;
let ghoulDirection = [1, -1, 20, -20];
let tempStore1 = 0 ;
let tempStore2 = 0 ;
let tempStore3 = 0 ;
let tempStore4 = 0 ;


let array = [
		  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		  1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		  1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 3, 1,
		  1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,
		  1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1,
		  1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1,
		  1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1,
		  1, 0, 1, 0, 1, 1, 1, 5, 0, 0, 0, 8, 1, 0, 0, 0, 0, 1, 0, 1,
		  1, 0, 0, 0, 0, 0, 1, 6, 0, 0, 0, 7, 1, 0, 0, 1, 0, 1, 0, 1,
		  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
		  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
		  1, 0, 1, 1, 1, 1, 1, 0, 4, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1,
		  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
		  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1,
		  1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
		  1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
		  1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1,
		  1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1,
		  1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
		  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				
];



function makeGrid(gridSize){
	for(let i=0; i<gridSize; i++){
		const div = document.createElement("div");
		div.classList.add("box");
		if(array[i] === 1){
			div.classList.add("wall");
		}else if(array[i] === 5 || array[i] === 6 || array[i] === 7 || array[i] === 8){
			if(array[i] === 5){
				div.classList.add("inky");
			} else if(array[i] === 6){
				div.classList.add("pinky");
			} else if(array[i] === 7){
				div.classList.add("clyde");
			} else {
				div.classList.add("miney");
			}
		} else if(array[i] === 4){
			div.classList.add("pacman");
		} else if(array[i] === 3){
			div.classList.add("pallete");
		} else if(array[i] === 2) {
			div.classList.add("empty");
		} else {
			div.classList.add("dot");
		}
		grid.appendChild(div);
	}

	gridArray = document.querySelectorAll(".box");


}

makeGrid(400);



function move(){

	

	do{
		if(array[inkyPos + ghoulDirection[inkyDir]] ===1){
		inkyDir = Math.floor(Math.random()*4);
		} 

		if(array[pinkyPos + ghoulDirection[pinkyDir]] === 1){
			pinkyDir = Math.floor(Math.random()*4);
		}

		if(array[mineyPos + ghoulDirection[mineyDir]] === 1){
			mineyDir = Math.floor(Math.random()*4);
		} 

		if(array[clydePos + ghoulDirection[clydeDir]] === 1){
			clydeDir = Math.floor(Math.random()*4);
		}


	} while (
		array[inkyPos + ghoulDirection[inkyDir]] === 1 ||
		array[pinkyPos + ghoulDirection[pinkyDir]] ===1 ||
		array[mineyPos + ghoulDirection[mineyDir]] ===1 ||
		array[clydePos + ghoulDirection[clydeDir]] ===1

	)

	
	if(Math.random() > 0.40){
		if (array[inkyPos - 20] != 1 &&
			array[inkyPos - 1] != 1 &&
			array[inkyPos + 1] != 1
		){
			inkyDir = 3;
		//	console.log("goingUpInky");
		}

		if (array[pinkyPos - 20] != 1 &&
			array[pinkyPos - 1] != 1 &&
			array[pinkyPos + 1] != 1
		){
			pinkyDir = 3;
		//	console.log("goingUpPinky");
		}

		if (array[mineyPos - 20] != 1 &&
			array[mineyPos - 1] != 1 &&
			array[mineyPos + 1] != 1
		){
			mineyDir = 3;
		//	console.log("goingUpMiney");
		}

		if (array[clydePos - 20] === 0 &&
			array[clydePos - 1] === 0 &&
			array[clydePos + 1] === 0
		){
			clydeDir = 3;
		//	console.log("goingUpClyde");
		}

		//console.log("inside");

	} 


	if(Math.random() > 0.60){
		if (array[inkyPos + 20] === 0 &&
			array[inkyPos - 1] === 0 &&
			array[inkyPos + 1] === 0
		){
			inkyDir = 2;
		//	console.log("goingUpInky");
		}

		if (array[pinkyPos + 20] === 0 &&
			array[pinkyPos - 1] === 0 &&
			array[pinkyPos + 1] === 0
		){
			pinkyDir = 2;
		//	console.log("goingUpPinky");
		}

		if (array[mineyPos + 20] === 0 &&
			array[mineyPos - 1] === 0 &&
			array[mineyPos + 1] === 0
		){
			mineyDir = 2;
		//	console.log("goingUpMiney");
		}

		if (array[clydePos + 20] === 0 &&
			array[clydePos - 1] === 0 &&
			array[clydePos + 1] === 0
		){
			clydeDir = 2;
			//console.log("goingUpClyde");
		}

		//console.log("inside2");

	}

	

	

	grid.innerHTML = "";

	array[inkyPos] = tempStore1;
	array[pinkyPos] = tempStore2;
	array[clydePos] = tempStore3;
	array[mineyPos] = tempStore4;

	tempStore1 = array[inkyPos + ghoulDirection[inkyDir]];
	tempStore2 = array[pinkyPos + ghoulDirection[pinkyDir]];
	tempStore3 = array[clydePos + ghoulDirection[clydeDir]];
	tempStore4 = array[mineyPos + ghoulDirection[mineyDir]]; 
		
	array[inkyPos + ghoulDirection[inkyDir]] = 5;
	array[pinkyPos + ghoulDirection[pinkyDir]] = 6;
	array[clydePos + ghoulDirection[clydeDir]] = 7;
	array[mineyPos + ghoulDirection[mineyDir]] = 8;
	inkyPos  += ghoulDirection[inkyDir];
	pinkyPos += ghoulDirection[pinkyDir];
	clydePos += ghoulDirection[clydeDir];
	mineyPos += ghoulDirection[mineyDir];
	makeGrid(400);	
	if(!array.includes(4)){
		clearInterval(timer);
		console.log(gridArray[pacPos].classList);
		gridArray[pacPos].classList.remove("pacman");
		return null;
	} 
	


	if((array[pacPos+direction]) != 1 && (
		array[pacPos + direction] != 5 ||
		array[pacPos + direction] != 6 ||
		array[pacPos + direction] != 7 ||
		array[pacPos + direction] != 8 )

	){
		grid.innerHTML = "";
		array[pacPos] = 2;
		array[pacPos + direction] = 4;
		pacPos += direction;
		makeGrid(400);
	}




	


	
}




function control(event){
	const { code } = event;
	if(code === "ArrowUp"){
		direction = -20;
	} else if(code === "ArrowDown"){
		direction = 20;
	} else if(code === "ArrowLeft"){
		direction = -1;
	} else if(code === "ArrowRight"){
		direction = 1;
	}
}



function runGame(){

}

window.addEventListener("keydown", (event) => control(event));
document.querySelector(".btn").addEventListener("click", ()=> clearInterval(timer));

timer = setInterval(move, 400);