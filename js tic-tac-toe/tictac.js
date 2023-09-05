



let oyuncu1 = "X"
let boxes = document.querySelectorAll(".box");


function gameArea() {
    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            if (box.textContent === "") {
                box.textContent = oyuncu1;
                turnplayer()
            }
            checkWin();
            checkTie();

        })

    })
}

function turnplayer() {
    if (oyuncu1 === "X") {
        oyuncu1 = "O"
        return;
    } else if (oyuncu1 === "O") {
        oyuncu1 = "X";
    }
}

function checkWin() {
    checkRows();
    checkColumns();
    checkDiagonals();

}


function checkTie() {

}


function checkRows() {
    let row1 = boxes[0].textContent == boxes[1].textContent &&
        boxes[0].textContent == boxes[2].textContent
        && boxes[0].textContent !== ""
    if (row1)
        console.log = "You Win"

}

function checkColumns() {

}

function checkDiagonals() {

}


gameArea()