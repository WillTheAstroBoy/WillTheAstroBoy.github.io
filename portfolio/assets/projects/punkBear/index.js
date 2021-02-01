
const cards = document.querySelector(".cards");
let card;
let pagination = 1;
const pageNo = document.querySelector(".page-no");
const next = document.querySelector(".next-page");
const previous = document.querySelector(".previous-page");
let hoppinessG = 0;
let hoppinessS = 200;
let abvG = 0;
let abvS = 20;


const filters = [document.querySelector(".all"), document.querySelector(".abv-low"), 
				document.querySelector(".abv-medium"), document.querySelector(".abv-high"),
				document.querySelector(".hoppiness-all"), document.querySelector(".hoppiness-low"),
				document.querySelector(".hoppiness-medium"), document.querySelector(".hoppiness-high")
 ]



async function getData(api){
	const fetchData = await fetch(api);
	const response = await fetchData.json();
	pageNo.textContent = pagination;
	cards.innerHTML = "";
	for(let i=0; i<response.length; i++){
		cards.innerHTML += `

				<div class="card">

					<img src="${response[i].image_url}" alt="${response[i].name}">
					
					<p class="heavy">${response[i].name}</p>
					<div class="container info">
						<p>ABV:<span class="">${response[i].abv}</span>%</p>
						<p>IBU:<span class="ibu">${response[i].ibu}</span></p>
					</div>
					<div class="card-body">
						<h4 class="card-body-title">${response[i].name}</h4>
						<p class="card-body-motto">${response[i].tagline}</p>
						<p class="card-body-main">${response[i].description}</p>
					</div>
				</div>
		`;
	}
	card = await document.querySelectorAll(".card");
	/*card.forEach((c)=>{
		c.addEventListener("mouseenter", (event)=>{
			event.target.querySelector(".card-body").style.display= "block";

		});

		c.addEventListener("mouseleave", (event=>{
			event.target.querySelector(".card-body").style.display = "none";
		}))
	}); */
}

getData("https://api.punkapi.com/v2/beers");

next.addEventListener("click", (e)=>{
	e.preventDefault();
	pagination++;
	cards.innerHTML = "";
	getData(`
		https://api.punkapi.com/v2/beers?page=${pagination}&abv_gt=${abvG}&abv_lt=${abvS}&ibu_gt=${hoppinessG}&ibu_lt=${hoppinessS}
		`);
});


previous.addEventListener("click", (e)=>{
	e.preventDefault();
	if(pagination != 1){
		pagination--;
		cards.innerHTML = "";
		getData(`https://api.punkapi.com/v2/beers?page=${pagination}&abv_gt=${abvG}&abv_lt=${abvS}&ibu_gt=${hoppinessG}&ibu_lt={hoppinessS}`);
	}
});


filters.forEach((filter)=>{
	filter.addEventListener("click", (e)=> handleFilter(e));
});



function handleFilter(e){
	e.preventDefault();
	switch(e.target.className){
		case "all":
		abvG = 0;
		abvS = 20;
		break;
		case "abv-low":
		abvS = 5;
		break;
		case "abv-medium":
		abvG = 5;
		abvS = 10;
		break;
		case "abv-high":
		abvG = 10;
		abvS = 20
		break;
		case "hoppiness-all":
		hoppinessG = 0;
		hoppinessS = 500;
		break;
		case "hoppiness-low":
		hoppinessS = 33;
		break;
		case "hoppiness-medium":
		hoppinessG = 33;
		hoppinessS = 66;
		break;
		case "hoppiness-high":
		hoppinessG = 66;
		hoppiness = 500;
		break;
	}
	getData(`
		https://api.punkapi.com/v2/beers?page=${pagination}&abv_gt=${abvG}&abv_lt=${abvS}&ibu_gt=${hoppinessG}&ibu_lt=${hoppinessS}
	`)

	console.log(abvS, hoppinessS);
}




