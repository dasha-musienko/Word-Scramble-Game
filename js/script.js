import words from "./words.json" assert { type: "json" };


const wordEl = document.querySelector(".word");
const rangeEl = document.querySelector(".range-slider");
const rangeValueEl = document.querySelector(".range-slider-value");
const wordInputEl = document.querySelector("#input");
const checkBtnEl = document.querySelector(".check-btn");
const refreshBtnEl = document.querySelector(".refresh-btn");


let wordLength = Number(rangeEl.value)
let word = "";
let typedWord = "";

createsRandomWord(words, wordLength)

rangeEl.addEventListener("input", rangeInputHandler)
wordInputEl.addEventListener("input", wordInputElHandler) 
checkBtnEl.addEventListener("click", checkBtnElHandler) 
refreshBtnEl.addEventListener("click", refreshBtnElHandler) 

function createsRandomWord (arr, length) {
  word = getRandomWord(arr, length)
  wordEl.textContent = shuffleLetters(word)
}

function getRandomWord (arr, length) {
  const filteredArr = arr.filter(el => el.length === +length)
  return filteredArr[Math.floor(Math.random() * filteredArr.length)]
}

function shuffleLetters (word){
  return word.split("").map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   .join("");
}

function rangeInputHandler (evt) {
  wordLength = evt.currentTarget.value;
  rangeValueEl.textContent = wordLength;

  createsRandomWord(words, wordLength)
}

function wordInputElHandler (evt) {
  typedWord = evt.currentTarget.value.toLowerCase().trim();
}

function checkBtnElHandler () {
  if (!typedWord) {
    window.alert("Insert your word")
    return
  } else if (typedWord !== word) {
    window.alert("The word is wrong")
    return
  } else {
    window.alert("You guessed the word!")
  }

  wordInputEl.value = "";
  createsRandomWord(words, wordLength)
}


function refreshBtnElHandler () {
  wordInputEl.value = "";
  createsRandomWord(words, wordLength)
}














