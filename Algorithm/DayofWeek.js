/**
 * @Purpose   : To find day falls on the given user input date format
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');
function dayOfWeek()
{
    var day=+process.argv[2];
    var month=+process.argv[3];
    var year=+process.argv[4]; 
    if(day>=1 && day<=31)
    {
        if(month>=1 && month<=12)
        {
            if(year>=999 && year<=9999)
            {
                var num=util1.dayOfWeek(day,month,year);
            }
            else
            {
                console.log('year should be present in between 999 to 9999');
            }
        }
        else
        {
            console.log('month should be present in between 1 to 12');
        }
    }
    else
    {
        console.log('day should be present in between 1 to 31');
    }
        
    

    var arr= ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    if (num <= arr.length)
    {
        console.log("The day falls on :" + arr[num])
    }
    else 
    {
        console.log("Invalid day ")
    
    }
}
    dayOfWeek();