const btn = document.querySelector(".btn");
btn.textContent = "punchline";

const setup = document.querySelector(".joke");
const punchline = document.querySelector(".punchline");



async function getJoke(){
	const response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
	const joke = await response.json();

	const temp = joke[0];
	
	setup.textContent = await temp.setup;
	punchline.textContent = await temp.punchline;
	if(btn.textContent.toLowerCase() === "new joke"){
		btn.textContent = await "punchline";
		punchline.style.display = await "none";
	} 

}

getJoke();

btn.addEventListener("click", (event)=>{
	event.preventDefault();
	
	if(btn.textContent.toLowerCase() === "punchline"){
		punchline.style.display = "block";
		btn.textContent = "new joke";
	} else {
		getJoke();

	}
} );