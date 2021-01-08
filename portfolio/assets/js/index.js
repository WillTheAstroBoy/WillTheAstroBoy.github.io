
window.onscroll = function() {myFunction()};


let navbar = document.querySelector(".nav");

let sticky = navbar.offsetTop;
const carousels = document.querySelectorAll(".carousel");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
let count = 0;

function myFunction() {
	if(window.pageYOffset >= sticky){
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

previous.addEventListener("click", (event)=> handlePrevious(event));
next.addEventListener("click", (event)=> handleNext(event));

function handlePrevious(event){
	event.preventDefault();
	if(count === 0){
		count =  carousels.length-1;
	} else {
		count--;
	}
	carousels.forEach((carousel)=> carousel.classList.remove("carousel-active"));
	carousels[count].classList.add("carousel-active");
}

function handleNext(event){
	event.preventDefault();
	if(count === carousels.length-1){
		count = 0;
	} else {
		count++;
	}
	carousels.forEach((carousel)=> carousel.classList.remove("carousel-active"));
	carousels[count].classList.add("carousel-active");
}