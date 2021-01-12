
window.onscroll = function() {myFunction()};


let navbar = document.querySelector(".nav");

let sticky = navbar.offsetTop;
const carousels = document.querySelectorAll(".carousel");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
let count = 0;
const collapseBtn = document.querySelector(".collapse-btn");
const nav = document.querySelector(".nav-elements");
const projectDetails = document.querySelectorAll(".project-details");

function myFunction() {
	if(window.pageYOffset >= sticky){
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

previous.addEventListener("click", (event)=> handlePrevious(event));
next.addEventListener("click", (event)=> handleNext(event));
collapseBtn.addEventListener("click", (event)=> handleCollapseBtn(event));

function handlePrevious(event){
	event.preventDefault();
	if(count === 0){
		count =  carousels.length-1;
	} else {
		count--;
	}
	carousels.forEach((carousel)=> carousel.classList.remove("carousel-active"));
	carousels[count].classList.add("carousel-active");
	projectDetails.forEach(project => project.classList.remove("current-project"));
	projectDetails[count].classList.add("current-project");
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

	projectDetails.forEach(project => project.classList.remove("current-project"));
	projectDetails[count].classList.add("current-project");

}



function handleCollapseBtn(event){
	event.preventDefault();
	nav.style.display === "flex" ? 
	nav.style.display = "none" : 
	nav.style.display = "flex";

	
}