/**
 * @Purpose   :To find prime numbers in between 0 t0 1000.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');

console.log("Prime no. from 0 to 1000:");
var pmNo=util1.primeNumbers();
console.log(pmNo+"");