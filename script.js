var board = [0,0,0,0,0,0,0,0,0];
var players  = ["X","O"];
var player = players[0];
var winner = false;

function checkWinner() {
    if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
        winner = true;
        $("#beurt")[0].innerHTML = "X is de winnaar";
    } else {
        console.log("no winner found");
    }

    //////////////////////////////////////////////////////////////////

    if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }

    if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
        winner = true;
        $("#beurt")[0].innerHTML = "O is de winnaar";
    } else {
        console.log("no winner found");
    }
}


function whichSquare(){
        if (player == "X" && winner == false){

            if  ($("#"+this.id)[0].innerHTML == "O"){
                player = players[0];
            } else if ($("#"+this.id)[0].innerHTML == ""){
                $("#"+this.id)[0].innerHTML = player;
                board[this.id] = player;
                player = "O";
                $("#beurt")[0].innerHTML = "O is aan de beurt";
            }
        }

        if (player == "O" && winner == false){

            if  ($("#"+this.id)[0].innerHTML == "X"){
                player = players[1];
            } else if ($("#"+this.id)[0].innerHTML == ""){
                $("#"+this.id)[0].innerHTML = player;
                board[this.id] = player;
                player = "X";
                $("#beurt")[0].innerHTML = "X is aan de beurt";

            }
        }
    console.log(board);
    checkWinner();
    }



var classname = document.getElementsByClassName("square");

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', whichSquare, false);
}