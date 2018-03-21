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

var sqr = $('.square');


sqr.on('click', (e) => {
    //this is keeping track of whose turn it is
    if (currentTurn % 2 === 1) {
        event.target.innerHTML = players[currentTurn];
        event.target.style.color = "red";
        currentTurn++;
    } else {
        event.target.innerHTML = players[currentTurn];
        event.target.style.color = "green";
        currentTurn--;
    }
})