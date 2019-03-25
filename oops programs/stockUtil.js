/**
 * @Purpose   :Stock Class holding the list of Stocks read
 *             from the input file. Have functions in the Class to calculate the value of each
 *             stock and the value of total stocks
 */
class Stock{

    stock(data) {
        var stock = data.stock;
        /*to calculate the total value of per stocks*/
        for (var key in stock) {
            console.log(stock[key]);
            console.log("The total value of " + stock[key].stock_name + " is ", stock[key].number_of_shares * stock[key].share_price);
            console.log('\n');
        }
        /*to calculate all stock price*/
        var newstock = 0;
        for (var key in stock) {
            newstock = parseInt(newstock) + parseInt(stock[key].number_of_shares * stock[key].share_price);
        }
        console.log("The total value of all stocks are  " + newstock);

    }

}module.exports=new Stock();