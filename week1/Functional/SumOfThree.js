/**
 * @Purpose   :to find triplets from user input array elements
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var arr1=[];
var size=readline.question("enter size of array:")
console.log("enter array elements");
for(var i=0;i<size;i++)
{
    arr1[i]=readline.question("enter element on"+i+" position:");
}
  util.sumOfThree(arr1,size);
  