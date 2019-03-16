/**
 * @Purpose   :is to find the number of user guess
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1 = require('../AlgoUtility/Utility1');

var readline = require('readline-sync');

function number() {
    var num = readline.question("enter a number between 0 t0 N-1, where N=2^n :");
    var No = util1.isPower(num);

    if (No) {
        var n = (Math.sqrt(num, 2));

        if (n % 2 == 0) {
            console.log("Think an integer between 0 and ", (num - 1));
            var toFind = util1.search(0, num);
            console.log("Your number is ", toFind);
        }
        else {
            console.log("Invalid input ");
        }
    }
}

number();