/**
 * @Purpose :To create the stock Account class and writing create account ,buyShare,shellShare,display 
 *           the share methods and maintain the json file.
 */
var readline = require('readline-sync');
var filestream = require('fs');
class StockAccount {

    constructor(data, data1) {

        var company = this.data;
        var customer = this.data1;

    }
    /**createAccount method is used to create account for new customer */
    createAccount(data, data1) {

        var customer1 = data1.customer;

        console.log(customer1);
        var name1 = readline.question('enter the name');
        /*to check customer available or not*/
        for (var key in customer1) {
            console.log(customer1[key].name);
            if (customer1[key].name == name1) {
                console.log('customer already exist');
                return;
            }
        }
        /* random method to generate the id for customer*/
        var id = Math.floor(Math.random() * 100);
        var share = readline.question('enter the share');
        var amount = readline.question('enter the ammount customer have');
        var price = readline.question('enter the price');
        /**to store the data in customer1 object */
        data1.customer.push({
            name: name1,
            Id: id,
            share: share,
            amount: amount,
            price: price
        })
        /**write the customer object in json file. */
        filestream.writeFileSync('customer.json', JSON.stringify(customer1));
        console.log('Account added successfully');
        return name1;
    }

    /**buyShare methode is used buy the from company share by customer */
    buyShare(data, data1) {

        var company1 = data.company;
        var customer1 = data1.customer;
        // console.log(data);


        var name1 = readline.question('enter the customer name :');
        var id1 = readline.question('Please, enter your Id:');

        /*to check the customer is present or not, so that he can buy share*/
        var flag = false;
        for (var index = 0; index < customer1.length; index++) {

            if (customer1[index].name == name1 && customer1[index].Id == id1) {
                flag = true;
                console.log('You can buy the share');
                var search = readline.question('Press 1 if you want to search the company info else 0:');
                if (search == 1) {
                    console.log('********Company Details*********');
                    console.log();
                    console.log(company1);
                }

                var compName = readline.question('enter the company name where you want to buy share ');

                var compSymbol = readline.question('enter company symbol ');
                var count = 0;
                for (var key in company1) {

                    if (company1[key].name == compName && company1[key].symbol == compSymbol) {

                        count = 1;
                        console.log(compName + ' have ' + company1[key].no_of_share + ' share.');
                        console.log("share price of " + compName + " is " + company1[key].share_price);
                        var shareNumber = readline.questionInt('enter share value, how much share you want yo buy ');
                        console.log(company1[key].no_of_share);
                        console.log("user entered name ", shareNumber)
                        /**company should have greater number of share to shell the share so that 
                         * checking this condition **/
                        if (company1[key].no_of_share > shareNumber) {

                            var shareAmount = shareNumber * company1[key].share_price;
                            console.log("total share amount you have to pay " + shareAmount)
                            /**customer should have that much amount to buy the share  */
                            if (customer1[index].amount >= shareAmount) {

                                company1[key].amount = parseInt(company1[key].amount) + shareAmount;
                                company1[key].share = company1[key].no_of_share - shareNumber;
                                console.log(company1[key].amount, company1[key].share);
                                //                     
                                customer1[index].share = parseInt(customer1[index].share) + shareNumber;
                                customer1[index].amount = customer1[index].amount - shareAmount;
                                console.log(customer1[index].share, customer1[index].amount);

                                /*write object data to the json file*/
                                filestream.writeFileSync('companyShare.json', JSON.stringify(company1));
                                filestream.writeFileSync('customer.json', JSON.stringify(customer1));
                                return compSymbol;
                            }
                            else {
                                console.log('customer not have that much amount to buy the share');
                                return;
                            }
                        }
                        else {
                            console.log('company not have that much share which customer want to buy');
                            return;
                        }

                    }



                } if (count == 0) {
                    console.log('Invalid company name and symbol')
                }


            }


        } if (flag == false) {
            console.log('invalid customer name or Id');
        }

    }
    /**shellShare method is used to shell the share by customer to comapny */
    shellShare(data, data1) {
        var company1 = data.company;
        var customer1 = data1.customer;
        console.log(customer1);

        var name1 = readline.question('enter the customer name who want to shell the shares :');
        var id1 = readline.question('Please, enter your Id:');
        // to check the customer have account or not, so that he can buy share
        var flag = false;
        for (var index = 0; index < customer1.length; index++) {
            if (customer1[index].name == name1 && customer1[index].Id == id1) {
                flag = true;
                console.log('You can shell the share');
                console.log(name1 + ' have ' + customer1[index].share + ' shares');

                console.log(name1 + ' share price is ' + customer1[index].price);
                /**search for company */
                var search = readline.question('Press 1 if you want to search the company info else 0:');
                if (search == 1) {
                    console.log('********Company Details*********');
                    console.log();
                    console.log(company1);
                }
                var compName = readline.question('enter the company name where you want to shell your share ');

                var compSymbol = readline.question('enter company symbol ');
                var count = 0;
                for (var key in company1) {
                    /**to check the company is available or not in company object */
                    if (company1[key].name == compName && company1[key].symbol == compSymbol) {
                        count = 1;

                        console.log(compName + ' have ' + company1[key].amount + ' amount.');
                        var shareNumber = readline.questionInt('enter share value how many share you want to shell');
                        console.log(company1[key].no_of_share);
                        console.log("user entered number ", shareNumber);
                        /**customer should have greater number of share to shell the share so that 
                         * checking this condition **/
                        if (customer1[index].share > shareNumber) {
                            var shareAmount = shareNumber * customer1[index].price;
                            console.log("total share amount company have to pay " + shareAmount);
                            /**company should have that much amount to buy the share  */
                            if (company1[key].amount >= shareAmount) {
                                var amt = 0, shr = 0;
                                amt = parseInt(company1[key].amount) - parseInt(shareAmount);
                                shr = parseInt(company1[key].no_of_share) + parseInt(shareNumber);
                                company1[key].amount = "" + amt;
                                company1[key].share = "" + shr;
                                console.log(company1[key].amount, company1[key].share);
                                //   
                                var amt1 = 0, shr1 = 0;
                                amt1 = parseInt(customer1[index].share) - parseInt(shareNumber);
                                shr1 = parseInt(customer1[index].amount) + parseInt(shareAmount);
                                customer1[index].share = "" + amt1;
                                customer1[index].amount = "" + shr1;
                                console.log(customer1[index].share, customer1[index].amount);
                                /*write object data to the json file*/
                                filestream.writeFileSync('companyShare.json', JSON.stringify(company1));
                                filestream.writeFileSync('customer.json', JSON.stringify(customer1));
                                return compSymbol;
                            }
                            else {
                                console.log('company not have that much amount to buy the share');
                                return;
                            }
                        }
                        else {
                            console.log('you do not have that much share for shelling');
                            return;
                        }
                    }

                } if (count == 0) {
                    console.log('Invalid company name or symbol');
                }

            }

        } if (flag == false) {
            console.log('customer does not have account, please create account first');
        }
    }
    /**Print method is used for display the customers and companies */
    print(data, data1) {
        var company1 = data.company;
        var customer1 = data1.customer;
        console.log(customer1);
        console.log();
        console.log(company1);
        return company1;
    }
}
module.exports = {
    StockAccount
}