/**
 * @Purpose   :To check whether two strings are anagram or not.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');

function anagram()
{
  var str1=readline.question("Enter first string ");
  var str2=readline.question("Enter second string ");
  var result=util1.isAnagram(str1,str2);
  if(result)
  {
    console.log("String is Anagram ");
  }
  else{
    console.log("String is not an anagram");
  }

}
anagram();


