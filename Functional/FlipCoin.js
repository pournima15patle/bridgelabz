/**
 * @Purpose :  By using random function flip the coin no of times from user input
 *             and print the percentage of head vs tails
 * @author  : pournima15patle
 * @version : 1.0
 * @since   : 03-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var N=readline.question("The number of times to Flip Coin:");

util.coinFlip(N);