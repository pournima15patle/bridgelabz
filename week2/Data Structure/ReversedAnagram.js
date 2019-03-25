/**
  * @Purpose   :Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using
                the Linked List and Print the Anagrams in the Reverse Order
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 16-03-2019
  **/
 
var util1=require('../../week1/AlgoUtility/Utility1');
var access=require('../DSUtility/StackLinked');
var take=require('util');
try{
function ReverseAnagram()
{
  var arr=[];
  for(let i=0;i<1000;i++)
  {
      if(util1.isPrime(i))
      {
        arr.push(i);
      }
  }
  
 
  var stk=new access.StackLinkedList;
  for(let i=0;i<arr.length;i++)
  {
      for(let j=i+1;j<arr.length;j++)
      {
          if(util1.isAnagram(arr[i],arr[j]))
          {
              stk.push(arr[i]);
              stk.push(arr[j]);
              
          }
      }
  }
  
  console.log("the numbers which are prime and anagram");
  stk.displayAnagram();
  console.log('\n\n');
}
ReverseAnagram();
 }
 catch(err){
   console.log(err);
  }