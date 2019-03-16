/**
  * @Purpose   :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
                the prime numbers in a 2D Array
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 14-03-2019
  **/
 try{
var access = require('../DSUtility/Prime2D');
function prime() {
    access.primeNumber2D();
}
prime();
 }
 catch(err){
     console.log(err);
 }