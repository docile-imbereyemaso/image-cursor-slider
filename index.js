let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn  = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(event)=>{
   event.preventDefault();
   scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft +=900;
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -=900;
})