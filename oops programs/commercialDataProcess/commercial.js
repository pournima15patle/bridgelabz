/**
  * @Purpose   :To Create stock account class and  create account,buy ,shell method for making the 
  *             transaction and update the information in json file.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 20-03-2019
  **/
var filestream = require('fs');
var util = require('../commercialDataProcess/stockAccount');
var util1=require('../commercialDataProcess/commercialUtility');

 function dataProcess(data, data1) {
        var readline = require('readline-sync');
        /**to read the json file of company */
        var content = filestream.readFileSync('companyShare.json');
        var data = JSON.parse(content);
        /**to read the json file of customer */
        var content1 = filestream.readFileSync('customer.json');
        var data1 = JSON.parse(content1);
        var object=new util.StockAccount(data,data1);

        
        /*read the choice from customer what transaction they have to make */
       var ch=readline.questionInt('Press 1 to create,Press 2 to buy,Press 3 to shell,Press 4 to Print');
        
        switch (ch) {
            case 1:
                object.createAccount(data,data1);
                break;
            case 2:
                object.buyShare(data, data1);
                break;
            case 3:
                object.shellShare(data, data1);
                break;
            case 4:
                object.print(data,data1);
                break;
            case 5:
                break;
            default:
                console.log('Please enter valid key');    
        }
    } dataProcess();
