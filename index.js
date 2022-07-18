import DonutMaker from "./DonutMaker.js";



let donut = 0;
let autoClicker = 0;
let multiplier = 0;

const donuts = new DonutMaker(donut, autoClicker, multiplier);


const donutClick = document.querySelector("#donutclick");
const donutImage = document.querySelector("#img");
donutImage.addEventListener("click", () => {
  donuts.addToDonut();
  donutClick.innerText =  donuts.donut + " Donuts";
})

setInterval(() => {
  if(donuts.autoClicker >= 1){
  donuts.addToDonut();
  donutClick.innerText = donuts.donut + " Donuts";
}}, 1000);
const updateClickPerSecond = document.querySelector("#clickpersecond");

const buyautoclicker = document.querySelector("#autoclicker")
const autoclickamount= document.querySelector("#autoshobutton");
autoclickamount.addEventListener("click", () => {
  donuts.buyAutoclicker();
  buyautoclicker.innerText = donuts.autoClicker; 
})

const multiplieramount = document.querySelector("#multiplier")
const buymultiplier = document.querySelector("#multiplershobutton");
buymultiplier.addEventListener("click", () => {
  donuts.buyMultiplier();
  multiplieramount.innerText = donuts.multiplier;
})
 
const restbtn = document.querySelector("#resetgamebutton");
restbtn.addEventListener("click", () => {
  donuts.resetGame();
  donutClick.innerText =  donuts.donut + " Donuts";
  buyautoclicker.innerText =  donuts.autoClicker; 
  multiplieramount.innerText = donuts.multiplier;

})