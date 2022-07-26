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

const autoClickerCost = document.querySelector("#autoclickercost");
const buyautoclicker = document.querySelector("#autoclicker");
const autoclickamount= document.querySelector("#autoshobutton");
autoclickamount.addEventListener("click", () => {
  donuts.buyAutoclicker();
  donuts.updateClickPerSecond();
  buyautoclicker.innerText = donuts.autoClicker; 
  autoClickerCost.innerText = donuts._autoClickerCost;
})

const multiplieramount = document.querySelector("#multiplier");
const multiplierCost = document.querySelector("#multipliercost");
const buymultiplier = document.querySelector("#multiplershopbutton");
buymultiplier.addEventListener("click", () => {
  donuts.buyMultiplier();
  multiplieramount.innerText = donuts.multiplier;
  multiplierCost.innerText = donuts._multiplierCost;
  donutClick.innerText =  donuts.donut;
})
const restbtn = document.querySelector("#resetgamebutton");
restbtn.addEventListener("click", () => {
  donuts.resetGame();
  donutClick.innerText =  donuts.donut + " Donuts";
  buyautoclicker.innerText =  donuts.autoClicker; 
  multiplieramount.innerText = donuts.multiplier;
  multiplierCost.innerText = donuts._multiplierCost;
  autoClickerCost.innerText = donuts._autoClickerCost;
})






