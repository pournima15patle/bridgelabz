/**
 * @Purpose   :To find euclidean distance from the point (x, y) to the origin (0, 0).
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 04-03-2019
 */
var util=require('../Utility/UtilityProgram');

var readline=require('readline-sync');

var x=+process.argv[2];
var y=process.argv[3];

util.distance(x,y);
 
