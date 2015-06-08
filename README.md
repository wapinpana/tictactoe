# tictactoe
project 1

The technologies used for this project are HTML, CSS, and Javascript/JQuery.

Approach Taken: I tried to simply my approach as much as possible.  I started by rendering my board using html id tags and styling CSS elements. Super basic created a 3 x 3 grid, making ea. box an individual input tag and adding a onclick class to select it.  

I started by creating a current symbol function to assign just a value that would change from "X" mark and "O" mark. This function is triggered by the boxesClicked function that would essentially just recognize what box was being clicked and assign the current mark value.  It would immediately disable itself to prevent current box being changed by clicking on it again and then first check to see if a winning combination was true, if not then changing the current value mark again by substracting 1 from the current player variable.   

The winning combination function is based on the boxids that were clicked.  The checkForWinner function currently has a very non DRY conditional statement that runs through all the possibilites of the winning combination based on the grid of input tags I created for each box.  It then creates an alert pop u box in response when winner was found.  

If winner is found it moves to a resetBoard function.  In this function, where it iterates from i values 1 through 9, matching the i value to box value id of each box and telling it to reset to an empty string.  The next line also takes any box that is currently still disabled and assigns it an open string as well.

Inside checkForWinner function inside the else if condition, if any of the boxes are not equal to an empty string meaning they have been clicked but there is no winner, because no winning combination previously, the board will still know to reset itself and clear the board to restart the new game.

Unsolved Problems: I'm trying to resolve the issue of inserting the submit button and having it render the names of the current player to the page. 

