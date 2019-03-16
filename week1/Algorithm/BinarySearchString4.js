/**
 * @Purpose   : To search the string by using binary search technique.
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
    arr[i]=readline.question("enter String on "+i+" th position: ");
}

//sort the array
arr=arr.sort();
console.log(arr);

var key=readline.question('enter key value that you want to search');
var low=0,high=arr.length-1;

var targetIndex=util1.binarySearch(arr,low,high,key);
console.log(targetIndex);


if(targetIndex>=0)
{
console.log("The target key element is found on the index",targetIndex);
}
else
{
    console.log("target key element is not found in array");
}
  