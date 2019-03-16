/**
 * @Purpose   :By ensuring username with minimum 3 characters,replacing USERNAME with userinput 
 *             and print the string.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 03-03-2019
 */
var util=require('../Utility/UtilityProgram');
var readline=require('readline-sync');

var string1 =readline.question("Enter the String ");

var string2 =readline.question("Enter the string where you want to replace the username:");

var answer =readline.question("Enter your userName:");

util.replaceString(string1,string2,answer);