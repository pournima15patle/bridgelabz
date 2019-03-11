/**
 * @Purpose   : convertion of decimal value to the binary.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');
var num =readline.question('enter the decimal number: ');
util1.bin(num);
 