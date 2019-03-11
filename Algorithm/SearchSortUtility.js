/**
 * @Purpose   :To check prime numbers that are anagram and palindrom
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
    arr[i]=readline.question('');
}
var low=0;high= arr.length-1;

var ele=readline.question('enter key');
util1.searchAndSort(arr,low, high, ele,size);