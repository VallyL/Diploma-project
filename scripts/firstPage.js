const searchEventInput = document.querySelector(".search-events-input");
const searchCityInput = document.querySelector(".search-city-input");
const searchButton = document.querySelector(".searchBtn");
const searchButtonTwo = document.querySelector(".searchBtnTwo");
const whiteSpanOne = document.querySelector(".whiteOne");
const whiteSpanTwo = document.querySelector(".whiteTwo");

searchEventInput.addEventListener("input", () => {
  updateButtonStyles();
});

searchCityInput.addEventListener("input", () => {
  updateButtonStylesTwo();
});

function updateButtonStyles() {
  if (searchEventInput.value) {
    searchButton.style.backgroundColor = "#F65858";
    whiteSpanOne.style.color = "white";
  } else {
    searchButton.style.backgroundColor = "transparent";
    whiteSpanOne.style.color = "#707070";
  }
}

function updateButtonStylesTwo() {
  if (searchCityInput.value) {
    searchButtonTwo.style.backgroundColor = "#F65858";
    whiteSpanTwo.style.color = "white";
  } else {
    searchButtonTwo.style.backgroundColor = "transparent";
    whiteSpanTwo.style.color = "#707070";
  }
}

/*----------------------------------------------------------------------*/
