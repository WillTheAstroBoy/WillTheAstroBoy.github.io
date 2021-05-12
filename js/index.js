const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", (e)=>{
    document.body.classList.toggle("nav-open");
});

const links = document.querySelectorAll(".nav-link");

links.forEach((link)=>{
    link.addEventListener("click", ()=>{
        document.body.classList.remove("nav-open")
    })
});