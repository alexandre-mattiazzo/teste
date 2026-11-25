const countElement = document.querySelector("#count");
const clickButton = document.querySelector("#click-button");

let count = 0;

clickButton.addEventListener("click", () => {
  count += 1;
  countElement.textContent = String(count);
});
