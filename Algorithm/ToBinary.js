/**
 * @Purpose   : calculate the binary value 
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');
var num =readline.question('enter the decimal number: ');
 
var bin=util1.toBinary(num);
console.log(num+" Decimal to Binary is:  "+bin);