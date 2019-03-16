/**
  * @Purpose   :Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using
                the Linked List and Print the Anagrams from the Queue.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 15-03-2019
  **/
 try{
var util1=require('../AlgoUtility/Utility1');
var access=require('../DSUtility/QueueLinked');
var take=require('util');
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
  
  var range=100, k=0;
  var que=new access.QueueLinked;
  for(let i=0;i<arr.length;i++)
  {
      for(let j=i+1;j<arr.length;j++)
      {
          if(util1.isAnagram(arr[i],arr[j]))
          {
              que.enqueue(arr[i]);
              que.enqueue(arr[j]);
              //k++;
          }
      }
  }
  
   que.displayAnagram();
    /*for(let i=0;i<2*k;i++)
    {
        take.print(stk.pop(i));
    }*/
    
  console.log('\n\n');
}
ReverseAnagram();
 }
 catch(err)
 {
   console.log(err);
 }