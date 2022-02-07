const $position = document.querySelectorAll(".position");
const $resetBoardbtn = document.querySelector(".resetBoardbtn");
const $scoreP1 = document.querySelector("#sP1")
const $scoreP2 = document.querySelector("#sP2")
const arr = new Array(9).fill(0); // Efficient way to initialize arrays
let turn = "X"; // The first player to play, play with "X"

const insertSign = (position) => {
  if (turn === "X" && !position.innerHTML && !win()) {
    position.innerHTML = "X";
    position.classList.add("text-primary");
    turn = "O";
    arr[position.id] = 1;
  } else if (!position.innerHTML && !win()) {
    position.innerHTML = "O";
    position.classList.add("text-danger");
    turn = "X";
    arr[position.id] = -1;
  }
};

const winRow = () => {
  for (let i = 0; i < 3; i++) {
    let a = i * 3;
    if (arr[a] + arr[a + 1] + arr[a + 2] === 3) {
      highlightWin(a, a + 1, a + 2);
      return true;
    } else if (arr[a] + arr[a + 1] + arr[a + 2] === -3) {
      highlightWin(a, a + 1, a + 2);
      return true;
    }
  }
};

const highlightWin = (pos1, pos2, pos3) => {
  [pos1, pos2, pos3].map((e) => {
    document.getElementById(e).classList.remove("text-primary");
    document.getElementById(e).classList.remove("text-danger");
    document.getElementById(e).classList.add("yellow");
  });
};
const addScore = (playerScore) =>{
  playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1
}
const winColumn = () => {
  for (let i = 0; i < 3; i++) {
    if (arr[i] + arr[i + 3] + arr[i + 6] === 3) {
      highlightWin(i, i + 3, i + 6);
      addScore($scoreP1)
      return true;
    } else if (arr[i] + arr[i + 3] + arr[i + 6] === -3) {
      highlightWin(i, i + 3, i + 6);
      addScore($scoreP2)
      return true;
    }
  }
};

const winDiagonal = () => {
  if (Math.abs(arr[0] + arr[4] + arr[8]) === 3) {
    if (arr[0] + arr[4] + arr[8] === 3) {
      highlightWin(0, 4, 8);
      addScore($scoreP1)
      return true;
    } else {
      highlightWin(0, 4, 8);
      addScore($scoreP2)
      return true;
    }
  } else if (Math.abs(arr[2] + arr[4] + arr[6]) === 3) {
    if (arr[2] + arr[4] + arr[6]) {
      highlightWin(2, 4, 6);
      addScore($scoreP1)
      return 1;
    } else {
      highlightWin(2, 4, 6);
      addScore($scoreP2)
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

const resetBoard = () => {
  $resetBoardbtn.addEventListener("click", () => {
    let i = 0;
    $position.forEach((sqr) => {
      sqr.innerHTML = null;
      sqr.classList.remove("yellow"); // Clear board, I would prefered make a function
      sqr.classList.remove("text-danger"); // Clear board, I would prefered make a function
      sqr.classList.remove("text-primary"); // Clear board, I would prefered make a function
      arr[i] = 0; // Reset array
      i += 1;
    });
  });
};

play();
resetBoard();
