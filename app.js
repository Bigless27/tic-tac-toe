// start with just putting nine squares on the screen. use
// flex box to do this.

//remember to add the border to the square to get the full
// board on the screen. the board should be 606px width
// also each square should be 200px by 200px

//then center the tic tac toe board

//you need to wrap the board in a container to vertically and
//horizontally center it on the page.

//load jQuery and put javascript tag below content

players = {
    1: "X",
    2: "O"
}

var currentTurn = 1;
var movesMade = 0;

var sqr = $('.square');


sqr.on('click', (e) => {
    movesMade++;
    //this is keeping track of whose turn it is
    if (currentTurn % 2 === 1) {
        event.target.innerHTML = players[currentTurn];
        event.target.style.color = "red";
        if (checkForWinner()) {
            console.log(players[currentTurn] + " Wins!");
        }
        currentTurn++;
    } else {
        event.target.innerHTML = players[currentTurn];
        event.target.style.color = "green";
        if (checkForWinner()) {
            console.log(players[currentTurn] + " Wins!");
        }
        currentTurn--;
    }
});

function checkForWinner() {
    //need at least four moves to check for a winner
    if (movesMade > 4) {
        var sqr = $('.square');
        //research why we need call here!
        var moves = Array.prototype.slice.call($(".square"));
        var results = moves.map(function(square) { return square.innerHTML; });
        var winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        return winningCombos.find(function(combo) {
            if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
        });
    }
}