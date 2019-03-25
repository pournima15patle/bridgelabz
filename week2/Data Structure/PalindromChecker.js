/**
  * @Purpose   :To check the string is palindrom or not using dequeue
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 14-03-2019
  **/

var access = require('../DSUtility/Dequeue');
var readline = require('readline-sync');
try {
    function check() {
        var dequeueAcc = new access.Dequeue;
        var string1 = readline.question('enter the string : ');
        var result = dequeueAcc.palindromChecker(string1);

        if (result == true) {
            console.log('String is palindrom');
        }
        else {
            console.log('String is not palindrom');
        }
    } check();
}
catch (err) {
    console.log(err);
}
