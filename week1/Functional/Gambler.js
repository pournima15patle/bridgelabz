/**
 * @Purpose   : To calculate the total number of wins and percentage of wins and loss
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var $stake=readline.question("Enter the $stake value:");

var $goal=readline.question("Enter the $goal value:");

var totalTimes=readline.question("Enter total of trials:");

util.gambler($stake,$goal,totalTimes);


