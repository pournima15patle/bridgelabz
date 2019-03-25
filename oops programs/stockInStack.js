    var filestream = require('fs');

    var util1 = require('../oops programs/StockAccountStack');

    var readline = require('readline-sync');
    var util=require('../week2/DSUtility/Stack')
    
    var content = filestream.readFileSync('companyShare.json');
    var data = JSON.parse(content);

    var content1 = filestream.readFileSync('customer.json');
    var data1 = JSON.parse(content1);
    var object = new util1.StockAccount(data, data1);
    var stk=new util.Stack();

function dataProcess() 
{
    // var readline = require('readline-sync');
    // var util=require('../week2/DSUtility/Stack')
    
    // var content = filestream.readFileSync('companyShare.json');
    // var data = JSON.parse(content);

    // var content1 = filestream.readFileSync('customer.json');
    // var data1 = JSON.parse(content1);
    // var object = new util1.StockAccount(data, data1);
    // var stk=new util.Stack();

    var ch = readline.questionInt('Press 1 to create,Press 2 to buy,Press 3 to shell,Press 4 to Print');

    switch (ch) {
        case 1:
            // console.log("switch case",this.data,  this.data1);
            var trans1=object.createAccount(data, data1);
            stk.push(trans1);
            stk.dispaly();

            break;
        case 2:
             var trans2=object.buyShare(data, data1);
             stk.push(trans2);
             stk.dispaly();
            break;
        case 3:
            var trans3=object.shellShare(data, data1);
            stk.push(trans3);
            stk.dispaly();
            break;
        case 4:
            var trans4=object.print(data, data1);
            stk.push(trans4);
            stk.dispaly();

            break;
        case 5:
            break;
        default:
            console.log('Please enter valid key');
    }
} dataProcess();