var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "blue";
boxes[2].style.backgroundColor = "yellow";

console.log(boxes[0]);
console.log(boxes[2]);

var leftMargin = 0;
var topMargin = 0;
var moveAmount = 20;

function boxClicked() {
  console.log("Hey, box clicked!");

  if (leftMargin < 100) {
    leftMargin += moveAmount;
  } else {
    leftMargin -= 100;
  }

  topMargin += moveAmount;
  boxes[0].style.marginLeft = leftMargin + "px";
  boxes[0].style.marginTop = topMargin + "px";
}

boxes[0].addEventListener("click", boxClicked);

