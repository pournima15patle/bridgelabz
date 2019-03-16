/**
 * @Purpose   : To find the windchill, by using user input temperature and volume.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
*/
var util = require('../Utility/UtilityProgram');

var read = util.input();

read.question("Enter the temperature in Fahrenheit: ", function (t) {
    read.question("Enter the wind speed in miles per hour:", function (v) {
        util.windChill(t, v);

        read.close();
    })
})