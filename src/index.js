import { images } from "../images/images";

const displayImg = document.getElementById("display");
const thumbnailElements = document.querySelectorAll(".pictures img");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let selectedTargetID = 1;

const setImageSrc = (number) => {
  return images[selectedTargetID - number];
};

const loadImages = () => {
  for (let i = 0; i < thumbnailElements.length; i++) {
    thumbnailElements[i].src = images[i];
  }
  displayImg.src = setImageSrc(1);
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
  displayImg.src = setImageSrc(2);
  selectedTargetID--;
  if (selectedTargetID === 0) {
    selectedTargetID = 3;
    displayImg.src = setImageSrc(1);
  }
  activeImage();
};

rightArrow.onclick = () => {
  removeClass();
  displayImg.src = setImageSrc(0);
  selectedTargetID++;
  if (selectedTargetID === 4) {
    selectedTargetID = 1;
    displayImg.src = setImageSrc(1);
  }
  activeImage();
};

for (const element of thumbnailElements) {
  element.onclick = (element, selectedTarget) => {
    removeClass();
    selectedTarget = element.currentTarget;
    selectedTargetID = Number(selectedTarget.id);
    displayImg.src = setImageSrc(1);
    activeImage();
  };
}
const removeClass = () => {
  for (const element of thumbnailElements) {
    element.classList.remove("activeImg");
    element.parentElement.classList.remove("activeBg");
  }
};
