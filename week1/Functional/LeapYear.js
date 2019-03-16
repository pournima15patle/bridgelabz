/**
 * @Purpose   :Taking input as a four digit number check whether the given number is a leap year
 *             or not. 
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 03-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var year1=readline.question("Enter the year:");

if(year1>=999 && year1<=9999)
{
    var result = util.checkLeapYear(year1);
    if(result==true)
    {
        console.log("Year is Leap Year");
    }
    else
    {
        console.log("Year is  not Leap Year");
    }

}
else
{
    console.log("Please, Enter Proper year");
}
