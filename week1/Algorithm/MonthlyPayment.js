/**
 * @Purpose   : To find the monthly-payment and prints the results. 
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');

var principle=+process.argv[2];
var year=+process.argv[3];
var rate=+process.argv[4];

util1.monthlyPayment(principle,year,rate);