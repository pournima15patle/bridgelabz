/**
  * @Purpose   :To Create inventory for stock class to maintain the stock object to read the stock 
  *             from json file and after maintaining it again write it in json file..
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 19-03-2019
  **/
var readline = require('readline-sync');
var filestream=require('fs');
var util=require('../inventManageUtil');
/*reading the json file*/
var content=filestream.readFileSync('inventManage.json');
var data=JSON.parse(content);

function inventManage(){
    util.inventManage(data);

}inventManage();