const boxes = document.querySelectorAll(".box");
const NewGame = document.querySelector("#Newgame");
const Reset = document.querySelector("#Reset");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");
const startgame = document.querySelector("#startgame");
const page1 = document.querySelector("#center-part1");
const page2 = document.querySelector("#center-part");
const Matches = document.querySelector("#Matches");
const box = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let X = document.querySelector("#X h3 span");
let Ties = document.querySelector("#ties h3 span");
let O = document.querySelector("#O h3 span");
let Xscore = 0;
let tiesscore = 0;
let Oscore = 0;
let matchno = 1;
let turn = document.querySelector("#turnname");
const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let turnX = true;
let stepsX = 0;
let stepsO = 0;

function fortie() {
  if (stepsX + stepsO == 9 && tiesscore >= 1) {
    tiesscore--;
    Ties.innerHTML = `<span>${tiesscore}</span>`;
  }
}
function disable() {
  boxes.forEach((box) => {
    box.setAttribute("disabled", " ");
  });
}
function check() {
  winning.forEach((pattern) => {
    let boxes1 = box[pattern[0]];
    let boxes2 = box[pattern[1]];
    let boxes3 = box[pattern[2]];
    if (
      boxes1.innerHTML === boxes2.innerHTML &&
      boxes2.innerHTML === boxes3.innerHTML &&
      boxes3.innerHTML === boxes1.innerHTML
    ) {
      if (boxes1.innerText === "X") {
        Xscore++;

        X.innerHTML = `<span>${Xscore}</span>`;
        fortie();

        disable();
        if (matchno == Matches.value) {
          winningmsg();
        } else {
          turn.innerHTML = `<h2>Click On Reset button to start another match`;
        }
      } else if (boxes1.innerText === "O") {
        Oscore++;

        O.innerHTML = `<span>${Oscore}</span>`;
        fortie();
        disable();
        if (matchno == Matches.value) {
          winningmsg();
        } else {
          turn.innerHTML = `<h2>Click On Reset button to start another match`;
        }
      }
    }
  });
}

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turnX) {
      box.innerHTML = "<span>X</span>";
      turn.innerText = "Player O Turn";
      turnX = false;
      box.style.color = "red";
      box.setAttribute("disabled", " ");
      stepsX++;
    } else {
      box.innerHTML = "<span>O</span>";
      box.setAttribute("disabled", " ");
      turn.innerText = "Player X Turn";
      box.style.color = "blue";
      turnX = true;
      stepsO++;
    }
    if (stepsX + stepsO == 9) {
      tiesscore++;

      Ties.innerHTML = `<span>${tiesscore}</span>`;
    }
    if (stepsX >= 3 || stepsO >= 3) {
      check();
    }
  });
});

function toclearbox() {
  boxes.forEach((box) => {
    box.innerHTML = "<span></span>";
    box.removeAttribute("disabled");
    turn.innerText = "Player X Turn";
    box.style.color = "red";
  });
}
NewGame.addEventListener("click", function () {
  toclearbox();
  turnX = true;
  stepsO = 0;
  stepsX = 0;
  Xscore = 0;
  tiesscore = 0;
  Oscore = 0;
  X.innerHTML = `<span>${Xscore}</span>`;
  O.innerHTML = `<span>${Oscore}</span>`;
  Ties.innerHTML = `<span>${tiesscore}</span>`;
  matchno = 1;
});
function winningmsg() {
  if (Xscore >= tiesscore && Xscore > Oscore) {
    turn.innerHTML = `<h1>Congratulations, Player X Won The Game</h1>`;
  } else if (Oscore > Xscore) {
    turn.innerHTML = `<h1>Congratulations, Player O Won The Game</h1>`;
  } else {
    turn.innerHTML = `<h1>Game Draw</h1>`;
  }
}

Reset.addEventListener("click", function () {
  if (matchno < Matches.value) {
    matchno++;

    toclearbox();
    turnX = true;
    stepsO = 0;
    stepsX = 0;
  } else if (matchno > Matches.value) {
    turn.innerHTML = `<h2> To Start a New Game Press New Game Button</h2>`;
  } else {
    matchno++;
  }
});

startgame.addEventListener("click", function () {
  if (Matches.value > 0) {
    page1.setAttribute("style", "display:none");
    page2.classList.toggle("hide");
  }
});
