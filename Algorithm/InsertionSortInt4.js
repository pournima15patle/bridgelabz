/**
 * @Purpose   : Sort the numbers by using insertion sort technique.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');

var arr=[];
var size=readline.question("enter size of array:");
console.log("enter array elements");
// read the elements in array 
for(var i=0;i<size;i++)
{
    arr[i]=readline.question("enter element on "+i+"th position:");
}
  var arr1=util1.insertionSortInt(arr);
  console.log("Sorted Array ");
  console.log(arr1);