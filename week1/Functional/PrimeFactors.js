/**
 * @Purpose   :To genarate primeFactor numbers according to the userinput
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var Num=readline.question("Enter the  Number:");

if(Num>2)
{
    util.primeFactor(Num);
}