var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "blue";
boxes[2].style.backgroundColor = "yellow";

console.log(boxes[0]);
console.log(boxes[2]);

function boxClicked() {
  console.log("Hey, box clicked!");
}

boxes[0].addEventListener("click", boxClicked);

