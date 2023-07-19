const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const right = left + 40; // Calculate the right edge of the dodger
  
    if (right < window.innerWidth) { // Check if the right edge is within the game field
        dodger.style.left = `${left + 1}px`; // Move the dodger to the right
    }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
      moveDodgerLeft();
  } else if (e.key === "ArrowRight") { // Add condition for right arrow key
      moveDodgerRight();
  }
});
