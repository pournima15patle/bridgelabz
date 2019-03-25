var filestream=require('fs');
var util=require('../week2/DSUtility/Stack');
var stk=new util.Stack();
data=filestream.readFileSync('transaction.json');
stk=JSON.parse(data)

transaction("buy","john","101","ibm","20","10000");
saveTransaction()

function transaction(){
    stk.dispaly()
    new_transaction={ "transaName":arguments[0],"custoName":arguments[1], "custoId":arguments[2],"compName":arguments[3], "noOfShare":arguments[4],"totalCost":arguments[5]}
    console.log(new_transaction);
    stk.push(new_transaction);
}transaction();

function saveTransaction(){
 
    filestream.writeFileSync('transaction.json',JSON.stringify(stk));
}saveTransaction();


