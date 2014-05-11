var board =[["","","","","","",""],
			["","","","","","",""],
			["","","","","","",""],
			["","","","","","",""],
			["","","","","","",""],
			["","","","","","",""]];
var turn = 0;
var slot = "";
var color = "";

//Two players, red and black. Red goes first
function playerTurn(){
	if ((turn % 2) == 1){
		return "black";
	} else {
		return "red";
	}
}

function placeToken(col){
	color = playerTurn();

	for(i=5; i >= 0; i--){
		if (board[i][col] == ""){
			board[i][col] = color;
			slot = "#slot" + i + col;
			turn++;
			i = -1;
		}
	}
}

function determineWin(){
	var last = "";
	var count = 0;
	//check horizontal columns
	for(i = 0; i < 6; i++){
		count = 0;
		last = "";
		for(j = 0; j < 7; j++){
			if ((board[i][j] == last) && (!(last==""))){
				count ++;
			} else {
				count = 0;
			}
			last = board[i][j];
			if (count >= 3){
				return true;
			}
		}
	}
	//check connect 4s vertically
	for(j = 0; j < 7; j++){
		count = 0;
		last = "";
		for(i = 0; i < 6; i++){	
			if ((board[i][j] == last) && (!(last==""))){
				count ++;
			} else {
				count = 0;
			}
			last = board[i][j];
			if (count >= 3){
				return true;
			}
		}
	}
	//Check diagonals connect 4s
	return false;
}

$(document).ready(function() {
    var board = "<table>";
    for(var i = 0; i < 6; i ++){
    	board = board + "<tr>";
    	for(var j = 0; j < 7; j++){
    		board = board + "<td class='slot'><div id='slot" + i + j + "' class='spot col" + j + "'></div></td>";
    	}
    	board = board + "</tr>";
    }
    board = board + "</table>";
    $('#board').html(board);

    $(".col0").click(function() {
        placeToken(0);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });

    $(".col1").click(function() {
        placeToken(1);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });

    $(".col2").click(function() {
        placeToken(2);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });

    $(".col3").click(function() {
        placeToken(3);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });

    $(".col4").click(function() {
        placeToken(4);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });

    $(".col5").click(function() {
        placeToken(5);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });

    $(".col6").click(function() {
        placeToken(6);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });

    $(".col7").click(function() {
        placeToken(7);
        $(slot).css("background-color", color);
        if (determineWin()) alert(color + " wins!");
    });
});



