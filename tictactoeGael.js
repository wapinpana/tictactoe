var player = 1;
var currentSymbol = function() {
	if(player === 1)
	  return "X";
	else
	  return "O";
}
var boxClicked = function(box){

	document.getElementById(box).value = currentSymbol();
	document.getElementById(box).disabled = "disabled";
	checkForWinner();
	player = 1-player;
}

var checkForWinner = function(){

	if( (document.getElementById("box1").value === currentSymbol() &&
		document.getElementById("box2").value === currentSymbol() &&
		document.getElementById("box3").value === currentSymbol()) ||
		(document.getElementById("box4").value === currentSymbol() &&
		document.getElementById("box5").value === currentSymbol() &&
		document.getElementById("box6").value === currentSymbol()) ||
		(document.getElementById("box7").value === currentSymbol() &&
		document.getElementById("box8").value === currentSymbol() &&
		document.getElementById("box9").value === currentSymbol()) ||
		(document.getElementById("box1").value === currentSymbol() &&
		document.getElementById("box4").value === currentSymbol() &&
		document.getElementById("box7").value === currentSymbol()) ||
		(document.getElementById("box2").value === currentSymbol() &&
		document.getElementById("box5").value === currentSymbol() &&
		document.getElementById("box8").value === currentSymbol()) ||
		(document.getElementById("box3").value === currentSymbol() &&
		document.getElementById("box6").value === currentSymbol() &&
		document.getElementById("box9").value === currentSymbol()) ||
		(document.getElementById("box1").value === currentSymbol() &&
		document.getElementById("box5").value === currentSymbol() &&
		document.getElementById("box9").value === currentSymbol()) ||
		(document.getElementById("box3").value === currentSymbol() &&
		document.getElementById("box5").value === currentSymbol() &&
		document.getElementById("box7").value === currentSymbol())
		 ){
			alert("Winner is "+currentSymbol()+"!");
			resetBoard();
		} else if (document.getElementById("box1").value !== "" && 
		document.getElementById("box2").value !== "" &&
		document.getElementById("box3").value !== "" && 
		document.getElementById("box4").value !== "" && 
		document.getElementById("box5").value !== "" && 
		document.getElementById("box6").value !== "" && 
		document.getElementById("box7").value !== "" && 
		document.getElementById("box8").value !== "" && 
		document.getElementById("box9").value !== "") {
			alert("We have a tie!");
			resetBoard();
		}
}
function newName(theName){
	document.getElementById("oname").innerHTML=theName.value;
	}
var resetBoard = function( ){
	for(var i = 1; i < 10; i++){
	document.getElementById("box"+i).value = "";
	document.getElementById("box"+i).disabled = "";
	}
}

//this is the most updated version of a functional game - basice mostly functions and html to make it work.
	
	

//players can select the boxes and alternate between X and O

// var playerOneBoxes = [];
// var playerTwoBoxes = [];
// var winningCombo = [
// 					[1, 2, 3]
// 					[4, 5, 6]
// 					[7, 8, 9]
// 					[1, 4, 7]
// 					[2, 5, 8]
// 					[3, 6, 0]
// 					[1, 5, 9]
// 					[7, 5, 3]
// 					];
// //compare to winning combination array to players selected boxes array. 
// var winningCombo = function(){
// 	for(var i = 0; i < winningCombo.length; i++);
// 		for(var j = 1; j < 3; j++);
// 			if(playerOneBoxes[i][0] == playerTwoBoxes[i][0]){
// 				console.log("We have a tie!");
// 			} else if {

// 			}
// };

// //starting with the js, to add input boxes for the player names to be entered, then I'm going to take that text and replace the text attached to the span tag with the player's name. 
// var inputs = $("input[type='text']");
// $inputs.on("keypress", function(eventObject){
// 	var $currentPlayer = $(this);
// 	var userName = $currentPlayer.val();
// 	//taking the value attached to current player to that I can attach it to the span text. 
// 	if (userText){
// 		var $span = $currentPlayer.parent();
// 		$span.text(userName);
// 	} else {
// 		$currentPlayer.focus(); //this will make sure we enter a name for both players. 
// 	};
// }


// ///////////////Another Example of how to long in the name of the players, maybe with a prompt?
// // var playersInGame = [];

// // var nextPerson = prompt("Enter player number one's name");
// // 	if (nextPerson !== "") {
// //   	var nextPersonObject = {};
// //   	nextPersonObject.name = nextPerson;

// //   var ageAndRelationship = prompt("Age and relationship? (e.g, 24, self")
// //   var arrayOfUsefulInfo = ageAndRelationship.split(', ');
// //   nextPersonObject.age = arrayOfUsefulInfo[0];
// //   nextPersonObject.name = arrayOfUsefulInfo[1];

// //   people.push(nextPersonObject);
// //   nextPerson = prompt("Next family member? (Leave blank when finished!")
// // }

// // var ageArray = [nextPersonObject.age];


// ////////////////////////////////////////////////////////
// //here I'm starting by creating the board, I don't know if I want to make the squares as li 3 squares across by 3.
// //I'm going to start with an array called gameboard and put the positions of all of the boxes on the grid.

// var gameBoard = [
// 		[boxNumber: 1, row: 1, column: 1],
// 		[boxNumber: 2, row: 1, column: 2],
// 		[boxNumber: 3, row: 1, column: 3],
// 		[boxNumber: 4, row: 2, column: 1],
// 		[boxNumber: 5, row: 2, column: 2],
// 		[boxNumber: 6, row: 2, column: 3],
// 		[boxNumber: 7, row: 3, column: 1],
// 		[boxNumber: 8, row: 3, column: 2],
// 		[boxNumber: 9, row: 3, column: 3],
// ];
// //Now I need to create an object called game that will hold all the properties I want the game to display.  

// var game = {
// 	playerXname: " ",
// 	playerOname: " ",
// 	playerXscore: 0,
// 	playerOscore: 0,
// 	gameWinner: true;


// 	var submitName = function(){
//     var playerName = document.getElementById("pOneName").value;
//     //grabing id of div in html "pOneName"
//     alert("Player One: " + player.name);
//  };
// //so this selectbox is to see what box in the grid has been selected and return a response that will activate a render function later. 
// 	var selectBox = function(){
// 		for(var i = 0; i < gameBoard.length; i++){
// 			var $gameBoard = $('gameBoard');
// 			var $boxNumber = $('boxNumber');
// 			$boxNumber.on("click", function(eventObject){
// 			if(gameBoard[i])
// 				//I think that instead of gameBoard it needs to be the i inside the gridcontainer b/c it will have a property of selected true or false. 
// 			}
// 			//I'm thinking its better to first add a click event here to activate the selection instead and then designate that it is taken. 
// 			if(gameBoard[i].boxNumber == "BoxOne"){
// 				$gameBoard.attr("class", "taken");
// 				//I'm adding a class to the gameboard i that has been selected to note that its taken.

// 			}
// 		}

// 	}//this ends the select box method

// };//this ends game object 

// /////////////
// function makeBoard (size) {
//   var board = [];

//   for (var i = 0; i < size; i++) {
//     var row = []; // each time through create an empty row
//     for (var j = 0; j < size; j++) {
//       row.push(null); // add nulls to the row
//     };
//     board.push(row); // lastly add the row to the board
//   };

//   return board;
// };
// ///////////
// function render (board) {
//   var $game = $( '#game' );
//   var $ul = $( '<ul>' );

//   for (var i=0; i < gameBoard.length; i++) {
//     var row = gameBoard[i];

//     for (var j=0; j < row.length; j++) {
//       var $li = $( '<li>' );
//       if (row[j] == 'button') {
//       	//I want to say if row[j] == ''
//         $li.addClass('buttonOpen');
//       } else if (row[j] == 'b') {
//         $li.addClass('snake-body');
//       };

//       $ul.append( $li );
//     };
//   };

//   $game.html( $ul );
// };

// var board = makeBoard(9);

// /////////////

// var checkBoxes = function (){

// 	//here I'm going through an array of possible winning combinations and checking it againts player's selected boxes[ which could be stored in a array?]
// }

// //////////////I think I need to create an object for each player so that I can keep track of what selections they have made. 
// var playerX = {
// 	name: "name",
// 	boxesPicked: [],
// 	wins: 0,
// 	viewBoxes: function(){
// 		for(var i = 0; i < player.cards.length; i++){
// 			var $playerXBoxes = $('<div>');
// 			//creating new div to hold player cards selected
// 			var $h2 = $('<h2>').text(player.name);

// 			$buttonOne.on("click", function(){
// 			player.name();
// 		};
// 	},

// };


// 	//when winning combination is statisfied, render a response saying we have a winner/at this point it will come up no matter who wins.  
// }

// // Game Flow

// //next step how does the computer know who is going first
// 	//something needs to indicate this before the click event. 

// //player O selects a box, box secures spot in the array and renders a O in its place.
// //player X selects a box, box secures spot in the array and renders a X in its place. 

// // //as board is filling up maybe a checkWinner function checks to see if there is any of the following configurations that can be winning outcomes..if player X has selected box 

// //compare this array to results from playerArray






