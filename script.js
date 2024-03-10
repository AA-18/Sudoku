var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.classList.add("number");
    number.addEventListener("click", selectNumber);
    document.getElementById("digits").appendChild(number);
  }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      if (board[r][c] != "-") {
        tile.innerText = board[r][c];
        tile.classList.add("presentTile");
      }
      if (r && r % 3 == 0) {
        tile.classList.add("horizontalLine");
      }
      if (c && c % 3 == 0) {
        tile.classList.add("verticalLine");
      }
      tile.addEventListener("click",updateBoard);
      document.getElementById("board").appendChild(tile);
    }
  }
}

function selectNumber() {
  if (numSelected) {
    numSelected.classList.remove("selectedNumber");
  }
  numSelected = this;
  this.classList.add("selectedNumber");
}

function updateBoard() {
    let coords = this.id.split('-');
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if(!numSelected || board[r][c]!='-') {
        return ;
    }
    // console.log(this);
    if(tileSelected) {
    tileSelected.classList.remove("selectedNumber");
    }
    tileSelected = this;
    tileSelected.classList.add("selectedNumber");

    tileSelected.innerText = numSelected.id;
    if(solution[r][c]!=numSelected.id)
    {
        errors++;
        document.getElementById("errors").innerText = errors;
        tileSelected.classList.add("error");
    } else {
        tileSelected.classList.remove("error");
    }
}