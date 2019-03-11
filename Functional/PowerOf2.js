/**
 * @Purpose   :generate the power of two values 
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var N=readline.question("Enter the value of N:");

var pw=util.power2(N);
