/**
 * @Purpose   : To find the word from word list.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */

var util1=require('../AlgoUtility/Utility1');
var readline=require('readline-sync');

var word=util1.binarySearch6();
var arr = []
arr = word;
var key=readline.question('enter key value that you want to search: ');
var low=0,high=arr.length-1;

var targetIndex=util1.binarySearch(arr,low,high,key);

if(targetIndex>=0)
{
console.log("The target key element is found on the index",targetIndex);
}
else
{
    console.log("target key element is not found in array");
}
