/**
 * @Purpose   :To check whether two strings are anagram or not.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');

var str1=readline.question('enter first string:');
var str2=readline.question('enter Second string:');
util1.isAnagram(str1,str2);
