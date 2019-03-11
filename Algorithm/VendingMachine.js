/**
 * @Purpose   : to dispence total minimum number of notes from vending machine.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util1=require('../AlgoUtility/Utility1');

var readline=require('readline-sync');
function vendingMachine()
{
  var amount=readline.question("Enter the amount ");
  util1.vendingMachine(amount,0,0);
}
vendingMachine();