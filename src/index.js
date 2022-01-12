import { images } from "../images/images";

const displayImg = document.getElementById("display");
const selectedImg = document.querySelectorAll(".pictures img");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let selectedTargetID = 1;

const loadImages = () => {
  for (let i = 0; i < selectedImg.length; i++) {
    selectedImg[i].src = images[i];
  }
  displayImg.src = images[0];
};

loadImages();

const checkId = () => {};

leftArrow.onclick = () => {
  removeClass();
  let index = selectedTargetID - 1;
  displayImg.src = images[index - 1];
  selectedTargetID--;
  if (selectedTargetID === 0) {
    selectedTargetID = 3;
    displayImg.src = images[selectedTargetID - 1];
  }
};
rightArrow.onclick = () => {
  removeClass();
  let index = selectedTargetID - 1;
  displayImg.src = images[index + 1];
  selectedTargetID++;
  if (selectedTargetID === 4) {
    selectedTargetID = 1;
    displayImg.src = images[selectedTargetID - 1];
  }
};

for (const element of selectedImg) {
  element.onclick = (element, selectedTarget) => {
    removeClass();
    selectedTarget = element.currentTarget;
    let selectedSrc = selectedTarget.src;
    displayImg.src = selectedSrc;
    selectedTarget.classList.add("activeImg");
    selectedTarget.parentElement.classList.add("activeBg");
    selectedTargetID = Number(selectedTarget.id);
  };
}
// document.getElementById("myImg").src = "hackanm.gif"
const removeClass = () => {
  for (const element of selectedImg) {
    element.classList.remove("activeImg");
    element.parentElement.classList.remove("activeBg");
  }
};
