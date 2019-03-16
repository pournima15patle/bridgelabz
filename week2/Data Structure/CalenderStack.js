/**
  * @Purpose   :To prints the Calendar of the month using Queue and stack
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 16-03-2019
  **/
 try{
var access = require('../DSUtility/Stack');
var access1 = require('../DSUtility/Queue');
var util = require('../Utility/UtilityProgram');
var util1 = require('../AlgoUtility/Utility1');
var readline = require('readline-sync');
var take = require('util');

function calender() {
    var month = +process.argv[2];
    var year = +process.argv[3];

    var answer = util1.dayOfWeek(Number(1), Number(month), Number(year));
    console.log(answer);

    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
    var months = ["", "Jan", "Feb", "March", "April", "May", "Jun", "July", "Augest", "Sept", "Oct", "Nov", "Dec"];

    var leap = util.checkLeapYear(year);//To check year is leap or not
    if (leap == true && months == 2) {
        dates[2] = 29;
    }
    var dayQue = new access1.Queue;
    var dateQue = new access1.Queue;
    var stk = new access.Stack;
    var stk1 = new access.Stack;

    for (let i = 0; i < 7; i++) {
        dayQue.enque(week[i]);
        stk.push(dayQue.deque());
    }
    for (let j = 1; j <= dates[month]; j++) {
        dateQue.enque(j);
       var s = stk1.push(dateQue.deque());

    }
    
    var rstk = stk.reverseStack();
    var rstk1 = stk1.reverseStack();


    for (let k = 0; k < 7; k++) {
        take.print(" " + rstk.pop());
    }
    console.log();
    for (let j = 0; j < (answer * 4 + 2); j++) {
        take.print(" ");

    }
    for (let j = 1; j <= dates[month]; j++) {
        var ch = rstk1.pop();
        if (ch < 10)
            take.print(" "+ch, "  ");
        else {
            take.print(ch, "  ");
        }
        if ((answer + ch) % 7 == 0) {
            console.log();
            take.print("  ");
        }

    }
    console.log("\n\n\n");

}
calender();
 }
 catch(err){
     console.log(err);
 }