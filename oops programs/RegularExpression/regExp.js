/**
  * @Purpose   :To read the Message and Replace your own information in the message.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 18-03-2019
  **/
var readline = require('readline-sync');
var util = require('../../oops programs/oopUtility');

function regex() {
    /*read the name of user and validate it*/
    var name = readline.question('Enter your name :');
    while(isNaN(name)==false){
        console.log('please, Re-enter your name');
        var name=readline.question("Enter your name :");
    }
    /*read the full name and validate it*/
    var fullName=readline.question('Enter your full name');
    while(isNaN(fullName)==false){
        console.log('please, Re-enter your full name');
        var fullName=readline.question("Enter your full name :");
    }
    /*reading the contact and validate it*/ 
    var contact=readline.question('Enter your mobile number:');
    while(isNaN(contact)==true || contact.length!=10)
    {
        console.log("Please, Re-enter your mobile number ");
        var contact=readline.question("Enter your mobile number ");
    }
    /* create the object of date for taking the date */
    var date=new Date();
    var answer=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    console.log(answer);
    util.regexExpression(name,fullName,contact,answer);

} regex();
