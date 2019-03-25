/**
  * @Purpose   :To create Banking Cash Counter where people come in to deposit Cash and
  *             withdraw Cash and check the balance is maintain or not using queue.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 14-03-2019
  **/
try {
    var access = require('../DSUtility/Queue');
    var readline = require('readline-sync');

    function Queue() {
        var req = new access.Queue;
        var put = [];
        var totalbankcash = 100000;
        flag = true;
        var ask = readline.question("Enter the total number of people ");

        if (ask > 0) {
            for (var i = 1; i <= ask; i++) {
                var ans = readline.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
                if (ans == 1) {
                    var amount = readline.question("Enter total amount do you want to Deposit ");
                    if (amount < totalbankcash) {
                        var put = req.enque(Number(amount));
                    }
                    else {
                        console.log('invalid amount');
                    }
                    flag = true;
                    
                }
                else if (ans == 2) {
                    var amount = readline.question("Enter total amount do you want to Withdraw  ");
                    var get = req.enque(Number(-amount));

                    flag = true;
                   
                }
                else {
                    console.log("Make sure that, you entered the correct key ");
                    flag = false;
                    return;
                }
            }
        }
        else {
            console.log("Invalid input ");
            return;
        }


        if (flag) {
            var addition = 0;
            for (let i = 1; i <= ask; i++) {
                addition = (addition + req.deque());//add deposited amount and substract withdraw amount
            }
            console.log(addition);
            var totaltransaction = totalbankcash + addition;
            console.log("At the end of the day Total amount left in the bank ", totaltransaction);
            // to check the bank balance is maintained or not.
            if (totaltransaction < totalbankcash) {
                console.log("Bank cash is not Maintained");
            }
            else {
                console.log("Bank cash is maintained");
            }
        }
    } Queue();
}
catch (err) {
    console.log(err);
}