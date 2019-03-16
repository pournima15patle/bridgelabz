/**
 * @Purpose   : convert the celsius to fahrenheit and vice versa of user choice conversion.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');

var number=readline.question('convert celsius to fahrenheit press 1 else press 2 to convert fahrenheit to celsius');

util1.tempConversion(number);