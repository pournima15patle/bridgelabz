/**
 * @Purpose   : To calculate the Quadartic roots using user input value.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
*/
var util=require('../Utility/UtilityProgram');

var read=util.input();

read.question('enter value of a:',function(a){
read.question('enter value of b:',function(b){
read.question('enter value of c:',function(c){

util.quadratic(a,b,c);
read.close();
    })
  })
})   

    


    


