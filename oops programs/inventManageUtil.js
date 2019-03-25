/**
 * @Purpose :Create InventoryManager to manage the Inventory. The Inventory Manager will use
 *  InventoryFactory to create Inventory Object from JSON. The InventoryManager will call each
 *  Inventory Object in its list to calculate the Inventory Price and then call the Inventor
 *  Object to return the JSON String.
 */
var readline = require('readline-sync');
var filestream = require('fs');
class Inventory {

    /*inventManage methode is used to manage the Inventory */
    inventManage(data) {
        var answer = Number(readline.question(" press \n 1. To add \n 2. To delete \n 3. To display \n 4. To print \n 5.To exit "));
        if (answer == 1) {
            this.add(data);
        }
        else if (answer == 2) {
            this.remove(data);
        }
        else if (answer == 3) {
            this.disp(data);
        }
        else if (answer == 4) {
            this.print(data);
        }
        else if (answer == 5) {
            this.exit(data);
        }
        else {
            console.log("Invalid key/input ");
        }

    }
    /*add method is used to add the new inventory in the */
    add(data) {

        var name = readline.question("Enter the name of the share  :  ");
        var share = readline.question("Enter the number of shares  :   ");
        var price = readline.question("Enter the price of your share :");
        data.stock.push({
            stock_name: name,
            no_of_share: share,
            share_price: price
        })
        /*to write the new Inventory in JSON file.*/
        filestream.writeFileSync('inventManage.json', JSON.stringify(data));
        /*JSON.stringify() method is used to convert object value data into the JSON value data*/
        this.inventManage(data);
    }
    /* remove the inventory from json*/
    remove(data) {
        var access = data.stock;var count=0;
        var answer = readline.question("Enter the stack name do you want delete");
        for (let i = 0; i < data.stock.length; i++) {
            if (data.stock[i].stock_name == answer) {
                count=1;
                var index = data.stock.indexOf(data.stock[i]);
                
                data.stock.splice(index, 1);
                console.log('Stock removed successfully!')
            }

        }

        filestream.writeFileSync('inventManage.json', JSON.stringify(data));
        this.inventManage(data);
        if(count==0){
             console.log("Stock not found ");
            this.remove(data);
         }
    }
    /*To display the inventory object*/
    disp(data) {
        console.log(data);
        this.inventManage(data);
    }
    /*To display the inventory with their total share value*/
    print(data) {
        var res = data.stock;
        console.log("The total price of your each share is ");
        for (var key in res) {
            console.log(res[key].stock_name + " -->  " + res[key].no_of_share * res[key].share_price)
        }
        this.inventManage(data);
    }
    /*to exit from the program*/
    exit() {
        console.log(" Thank you ");
        return;
    }
} module.exports = new Inventory();