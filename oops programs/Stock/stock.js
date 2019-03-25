/**
  * @Purpose   :To Create stock class to maintain the stock object in json file.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 18-03-2019
  **/
var filestream=require('fs');
var util= require('../stockUtil');
var content=filestream.readFileSync('stock.json');
var object=JSON.parse(content);

function stock(){
   // var stk=new util1.Stock();
    util.stock(object);
}stock();