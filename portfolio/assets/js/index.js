
window.onscroll = function() {myFunction()};


let navbar = document.querySelector(".nav");
const header = document.querySelector("header");
let sticky = navbar.offsetTop;
const carousels = document.querySelectorAll(".carousel");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
let count = 0;
const collapseBtn = document.querySelector(".collapse-btn");
const nav = document.querySelector(".nav-elements");
const projectDetails = document.querySelectorAll(".project-details");
let myTimer;
let myTimeOut;
let speed = 3000;

function myFunction() {
	if(window.pageYOffset > sticky){
		navbar.classList.add("sticky");
		header.classList.add("sticky-header");
	} else {
		navbar.classList.remove("sticky");
		header.classList.remove("sticky-header");
	}
}

previous.addEventListener("click", (event)=> handlePrevious(event));
next.addEventListener("click", (event)=> handleNext(event));
collapseBtn.addEventListener("click", (event)=> handleCollapseBtn(event));


function handlePrevious(event){
	event.preventDefault();
	clearInterval(myTimer);
	clearTimeout(myTimeOut);
	myTimeOut = setTimeout(()=> {myTimer = setInterval(slideShow, speed)}, 2000);
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
	clearInterval(myTimer);
	clearTimeout(myTimeOut);
	myTimeOut = setTimeout(()=> {myTimer = setInterval(slideShow, speed)}, 2000);
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

function slideShow(){
	count++;
	carousels.forEach(carousel => carousel.classList.remove("carousel-active"));
	projectDetails.forEach(project => project.classList.remove("current-project"));
	if(count > carousels.length-1){
		count = 0;
	}
	carousels[count].classList.add("carousel-active");
	projectDetails[count].classList.add("current-project");

}

myTimer = setInterval(slideShow, speed);