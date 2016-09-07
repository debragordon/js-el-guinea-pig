// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
var sectionClick = document.getElementsByTagName("section");

for (var i = 0; i < sectionClick.length; i++) {
  sectionClick[i].addEventListener('click', sectionWriter);
}

function sectionWriter (e) {
  document.getElementById("output-target").innerHTML = "<p>You clicked on the <span class='answer'>" + e.target.innerText + "</span> section</p>";
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var mouseOverH1 = document.getElementsByTagName("h1");

for (var i = 0; i < mouseOverH1.length; i++) {
  mouseOverH1[i].addEventListener('mouseenter', mouseMover);
}

function mouseMover (e) {
  document.getElementById("output-target").innerHTML = "<p>You moved your mouse over the <span class='answer'>header</span></p>";
}

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
var mouseLeave = document.getElementsByTagName("h1");

for (var i = 0; i < mouseLeave.length; i++) {
  mouseLeave[i].addEventListener('mouseleave', mouseLeaver);
}

function mouseLeaver (e) {
  document.getElementById("output-target").innerHTML = "<span class='answer'>You left me!?</span>";
}

// When you type characters into the input field, the output element should mirror the text in the input field.
var userInput = document.getElementById("keypress-input");

  userInput.addEventListener('keyup', copyUserInput);

function copyUserInput (e) {
  document.getElementById("output-target").innerHTML = "<p>" + userInput.value + "</p>";
}

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var colorMe = document.getElementById("add-color");

  colorMe.addEventListener('click', colorButton);

function colorButton (e) {
  document.getElementById("output-target").classList.add('blue');
}

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var hulkMe = document.getElementById("make-large");

  hulkMe.addEventListener('click', hulkButton);

function hulkButton (e) {
  document.getElementById("output-target").classList.add('hulk');
}

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
var borderMe = document.getElementById("add-border");

  borderMe.addEventListener('click', borderButton);

function borderButton (e) {
  document.getElementById("output-target").classList.add('border');
}

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var roundMe = document.getElementById("add-rounding");

  roundMe.addEventListener('click', roundButton);

function roundButton (e) {
  document.getElementById("output-target").classList.add('rounded');
}

