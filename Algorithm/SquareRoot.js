/**
 * @Purpose   : to find square root for non negative number by using the newton method 
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');
var num=readline.question('Enter the non negative value: ');
util1.sqrt(num);