var util = require('../Utility/UtilityProgram');

var readline = require('readline-sync');

var check = true;
var counter = 1;
var player = true;
var arr = [];
var row = readline.question("enter size of array:");
var col = readline.question("enter size of array:")

// read the elements in array 
for (var i = 0; i < row; i++) 
{
    arr[i] = [];
    for (var j = 0; j < col; j++) {
        
        arr[i][j] = '_';
    }
}
util.ticTacToe(arr,check, counter, player)
