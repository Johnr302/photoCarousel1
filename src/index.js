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
    element.onclick = (element, selectedTarget) => {
      removeClass();
      selectedTarget = element.currentTarget;
      selectedTargetID = Number(selectedTarget.id);
      displayImg.src = images[index];
      selectThumbnail();
    };
  }
  displayImg.src = setImageSrc();
};

loadImages();

const selectThumbnail = () => {
  for (const element of thumbnailElements) {
    if (Number(element.id) === selectedTargetID) {
      element.classList.add("activeImg");
      element.parentElement.classList.add("activeBg");
    }
  }
};

selectThumbnail();

const removeClass = () => {
  for (const element of thumbnailElements) {
    element.classList.remove("activeImg");
    element.parentElement.classList.remove("activeBg");
  }
};

const arrowHandler = () => {
  removeClass();
  if (selectedTargetID === 0) {
    selectedTargetID = 3;
  }
  if (selectedTargetID === 4) {
    selectedTargetID = 1;
  }
  displayImg.src = setImageSrc();
  selectThumbnail();
};

leftArrow.onclick = () => {
  selectedTargetID--;
  arrowHandler();
};

rightArrow.onclick = () => {
  selectedTargetID++;
  arrowHandler();
};
