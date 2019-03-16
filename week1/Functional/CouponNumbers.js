/**
 * @Purpose   :To find distinct coupon numbers
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var read=util.input();

read.question("Enter the coupon number:",function(number)
 {     
    util.couponNumbers(number);
 }
)