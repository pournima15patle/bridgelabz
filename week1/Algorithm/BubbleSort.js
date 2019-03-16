/**
 * @Purpose   : Sort the string by using bubble sort technique.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');

var arr1=[];
var size=readline.question("enter size of array:")
console.log("enter array elements");
// read the elements in array 
for(var i=0;i<size;i++)
{
    arr1[i]=readline.question("enter element on "+i+" position:");
}
  var arr=util1.bubbleSort(arr1,size);
  console.log("Sorted Array ");
  console.log(arr);