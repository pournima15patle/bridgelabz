/**
  * @Purpose   :To Create a JSON file having Inventory Details for Rice, Pulses and Wheats
  *             with properties name, weight, price per kg.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 18-03-2019
  **/
var filestream = require('fs');
var util = require('../../oops programs/oopUtility');

/*read the json file*/
var content = filestream.readFileSync('Invent.json');
var object = JSON.parse(content);
console.log(object);

function inventory() {
    util.inventory(object);
} inventory(object);
