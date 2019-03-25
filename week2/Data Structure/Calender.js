/**
  * @Purpose   :To prints the Calendar of the month.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 15-03-2019
  **/

    var take = require('util');
    var util1 = require('../../week1/AlgoUtility/Utility1');
    var util = require('../../week1/Utility/UtilityProgram');
    //var readline = require('readline-sync');
    try {
    function calender() {
        var month = +process.argv[2];
        var year = +process.argv[3];

        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

        //to calculate the starting day of month
        var day = util1.dayOfWeek(1, month, year);
        console.log(day);
        var leap = util.checkLeapYear(year);
        //to check the year is leap year or not if it is true then assign 29 to dates[2]
        if (leap == true && month == 2) {
            dates[2] = 29;
        }
        for (var i = 0; i < week.length; i++) {
            take.print(week[i] + "  ");
        }
        console.log();
        for (var i = 0; i < (day * 5); i++) {
            take.print(" ");
        }

        for (var i = 1; i <= dates[month]; i++) {
            if (i < 10) {
                take.print(" " + i + "   ");
            }

            if (i > 9) {
                take.print("" + i + "   ")
            }
            if ((i + day) % 7 == 0) {
                console.log();
            }

        }

        console.log("\n\n");

    }
    calender();
}
catch (err) {
    console.log(err);
}