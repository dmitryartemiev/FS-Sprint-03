"use strict";

// x - is an exit condition

let y = 1;
function* gen(x = 10) {
  let enter;
  for (let i = 0; i < x; i++) {
    yield (enter = prompt("Previous result: " + y + ". Enter a new number:"));
    if (Number(enter) > 10000) {
      y = 1;
    } else if (Number.isNaN(Number(enter))) {
      console.error("Invalid number!");
    } else {
      y += Number(enter);
    }
  }
}

for (let k of gen()) {}
