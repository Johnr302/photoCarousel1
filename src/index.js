import { images } from "../images/images";

const displayImg = document.getElementById("display");
const thumbnailElements = document.querySelectorAll(".pictures img");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let selectedTargetID = 1;

const setImageSrc = () => {
  return images[selectedTargetID - 1];
};

const loadImages = () => {
  for (const [index, element] of thumbnailElements.entries()) {
    element.src = images[index];
  }
  displayImg.src = setImageSrc();
};

loadImages();

const activeImage = () => {
  for (const element of thumbnailElements) {
    if (Number(element.id) === selectedTargetID) {
      element.classList.add("activeImg");
      element.parentElement.classList.add("activeBg");
    }
  }
};

activeImage();

leftArrow.onclick = () => {
  removeClass();
  selectedTargetID--;
  if (selectedTargetID === 0) {
    selectedTargetID = 3;
    displayImg.src = setImageSrc();
  } else {
    displayImg.src = setImageSrc();
  }
  activeImage();
};

rightArrow.onclick = () => {
  removeClass();
  selectedTargetID++;
  if (selectedTargetID === 4) {
    selectedTargetID = 1;
    displayImg.src = setImageSrc();
  } else {
    displayImg.src = setImageSrc();
  }
  activeImage();
};

for (const [index, element] of thumbnailElements.entries()) {
  element.onclick = (element, selectedTarget) => {
    removeClass();
    selectedTarget = element.currentTarget;
    selectedTargetID = Number(selectedTarget.id);
    displayImg.src = images[index];
    activeImage();
  };
}
const removeClass = () => {
  for (const element of thumbnailElements) {
    element.classList.remove("activeImg");
    element.parentElement.classList.remove("activeBg");
  }
};
