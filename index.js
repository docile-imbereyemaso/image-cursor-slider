let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn  = document.getAnimations("nextBtn");

scrollContainer.addEventListener("wheel",(event)=>{
   event.preventDefault();
   scrollContainer.scrollLeft += event.deltaY;
})