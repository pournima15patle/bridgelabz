/**
 * @Purpose   : To calculate the time that elapses between the start and end clicks
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
*/
var util = require('../Utility/UtilityProgram');

var read = util.input();

read.question("press '1' to start timer:", function (starTime) {
    if (startTime == 1) {
        var start = new Date().getTime();

        read.question("Press 0 to stop time:", function (stopTime) {
            if (stopTime == 0) {
                var stop = new Date().getTime();
                var result = util.elapsedTime(start, stop);
            }
            console.log("elapsed time is =" + result + " in millisec");
            console.log("elapsed time is  =" + result / 1000 + " in sec");
            read.close();

        })
    }

    else {
        console.log("Invalid Input");
    }

})



