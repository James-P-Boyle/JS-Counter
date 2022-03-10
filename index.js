const background = document.querySelector(".main-container");
const colorChangeBtn = document.querySelector("#color-btn");

const colors = ["red", "royalblue", "green", "purple", "yellow"];
const colors2 = ["black", "gray", "brown", "pink", "orange"];
let i = 0;
const changeColor = () => {
  background.style.backgroundColor = colors[i];

  i > colors.length - 2 ? (i = 0) : i++;
};

let count = 0;
const decrease = () => {
  screenResult(count--);
};
const reset = () => {
  screenResult((count = 0));
};
const increase = () => {
  screenResult(count++);
};
const screenResult = () => {
  document.querySelector("#screen").innerHTML = count;
};
