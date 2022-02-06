const $position = document.querySelectorAll(".position");
const $resetbtn = document.querySelector(".btn");
const $x = document.querySelector("#X");
const $o = document.querySelector("#O");
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turn = "X"; // The first player to play is "X"

const insertSign = (position) => {
  if (turn === "X" && !position.innerHTML && !win()) {
    position.innerHTML = "X";
    turn = "O";
    arr[position.id] = 1;
  } else if (!position.innerHTML && !win()) {
    position.innerHTML = "O";
    turn = "X";
    arr[position.id] = -1;
  }
};

const winRow = () => {
  for (let i = 0; i < 3; i++) {
    let a = i * 3;
    if (arr[a] + arr[a + 1] + arr[a + 2] === 3) {
      console.log("winner row X");
      return true;
    } else if (arr[a] + arr[a + 1] + arr[a + 2] === -3) {
      console.log("winner row O");
      return true;
    }
  }
};

const winColumn = () => {
  for (let i = 0; i < 3; i++) {
    if (arr[i] + arr[i + 3] + arr[i + 6] === 3) {
      console.log("winner column X");
      return true;
    } else if (arr[i] + arr[i + 3] + arr[i + 6] === -3) {
      console.log("winner column O");
      return true;
    }
  }
};

const winDiagonal = () => {
  if (Math.abs(arr[0] + arr[4] + arr[8]) === 3) {
    if (arr[0] + arr[4] + arr[8] === 3) {
      console.log("winner diagonal X");
      return true;
    } else {
      console.log("winner diagonal O");
      return true;
    }
  } else if (Math.abs(arr[2] + arr[4] + arr[6]) === 3) {
    if (arr[2] + arr[4] + arr[6]) {
      console.log("winner diagonal X");
      return 1;
    } else {
      console.log("winner diagonal O");
      return true;
    }
  }
  return false;
};

const win = () => {
  if (winRow() || winColumn() || winDiagonal()) {
    return true;
  }
  return false;
};

const play = () => {
  $position.forEach((sqr) => {
    sqr.addEventListener("click", () => {
      if (!win()) {
        insertSign(sqr);
        win();
      }
    });
  });
};

const resetGame = () => {
  $resetbtn.addEventListener("click", () => {
    let i = 0;
    $position.forEach((sqr) => {
      sqr.innerHTML = null;
      arr[i] = 0;
      i += 1;
    });
  });
};

play();
resetGame();
