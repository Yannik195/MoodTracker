//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("C:\\Users\\yanni\\Documents\\Projekte\\MoodTracker\\Website\\index.html");
});

app.listen(3000, () => {
  console.log(`Server is listening`);
});



function Day (mood) {
  this.mood = mood;
}

var days = [];


function generateColor(mood, element){
  switch(mood){
    case "1":
    console.log("Case1");
    element.classList.add("bg-red1");
    break;
    case "2":
    element.classList.add("bg-red2");
    break;
    case "3":
    element.classList.add("bg-red3");
    break;
    case "4":
    element.classList.add("bg-green1");
    break;
    case "5":
    element.classList.add("bg-green2");
    break;
    case "6":
    element.classList.add("bg-green3");
    break;
  }
}

function generateDiv(day){
  var mood = day.mood;
  console.log(mood);
  var div = document.createElement("div");
  div.classList.add("day-rec");
  console.log(day);

generateColor(mood, div);
  document.getElementsByClassName("day-container")[0].appendChild(div);
}

function displayDivs(days){
  for (i = 0; i < days.length; i++){
    generateDiv(days[i]);
  }
}

function removeDivs(){
  var myNode = document.getElementById("day-container");
  while (myNode.lastChild){
    myNode.removeChild(myNode.lastChild);
  }
}

function add(){
  var day = new Day(document.getElementById("myRange").value);
  days.push(day);
  generateDiv(day);
}
