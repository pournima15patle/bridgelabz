/**
 * @Purpose   :To genarate harmonic numbers according to the user input.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var N=readline.question("Enter the Value of N:");

var harmNumber=util.harmonic(N);
console.log(harmNumber);