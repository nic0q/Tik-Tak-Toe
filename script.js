const $position = document.querySelectorAll(".position");
const $x = document.querySelector("#X");
const $o = document.querySelector("#O");
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let turn = "X";

const insertSign = (pos) => {
  if (turn === "X" && !pos.innerHTML) {
    pos.innerHTML = "X";
    turn = "O";
    arr[pos.id] = 1;
  } else if (!pos.innerHTML) {
    pos.innerHTML = "O";
    turn = "X";
    arr[pos.id] = -1;
  }
};

const winRow = () => {
  for (let i = 0; i < 3; i++) {
    let a = i * 3;
    if (Math.abs(arr[a] + arr[a + 1] + arr[a + 2]) === 3) {
      console.log("winner row");
      return;
    }
  }
};

const winColumn = () => {
  for (let i = 0; i < 3; i++) {
    if (Math.abs(arr[i] + arr[i + 3] + arr[i + 6]) === 3) {
      console.log("winner column");
      return;
    }
  }
};

const winDiagonal = () => {
  if (Math.abs(arr[0] + arr[4] + arr[8]) === 3) {
    console.log("winner diagonal");
    return;
  } else if (Math.abs(arr[2] + arr[4] + arr[6]) === 3) {
    console.log("winner diagonal");
    return;
  }
};

const win = () => {
  winRow();
  winColumn();
  winDiagonal();
};

const play = () => {
  $position.forEach((sqr) => {
    sqr.addEventListener("click", () => {
      insertSign(sqr);
      win();
    });
  });
};


play();
