/**
 * @Purpose   :to print Two Dimensional Array,from user input elements 
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var row=readline.question("enter number of row:");
var column=readline.question("enter number of column:");
var arr=util.twoDArray(row,column);
console.log(arr);
