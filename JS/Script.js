const genaretor = document.querySelector(".color");
const input = document.querySelector(".outPut input");
const copyBtn = document.querySelector(".outPut span");
const copyColor = document.querySelector(".copyColor");
const refresh = document.querySelector(".refresh");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const menu01Btn = document.querySelector(".menu01Btn");
const title = document.querySelector(".counterNumber")
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

const body = document.body;

let colorCodeCopy = "";

genaretor.addEventListener("click", (e) => {
  colorCodeCopy = colorGenaretor();
  input.value = colorCodeCopy;
  body.style.backgroundColor = colorCodeCopy;
});

const colorGenaretor = () => {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue} )`;
};

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorCodeCopy);
  copyBtn.innerHTML = "&#9745;"
  copyColor.classList.add("active")
});

refresh.addEventListener("click", ()=> {
  copyColor.classList.remove("active")
  location.reload();
});

menu.addEventListener("click", ()=>{
  overlay.classList.add("oveerlayActiv")
});

menu01Btn.addEventListener("click", ()=>{
  overlay.classList.remove("oveerlayActiv")
});

let counter = 0;

increase.addEventListener("click", ()=>{
  counter++;
  title.textContent = counter;
})

decrease.addEventListener("click", ()=>{
  counter--;
  title.textContent = counter;
})

reset.addEventListener("click", ()=>{
  counter = 0;
  title.textContent = counter;
})