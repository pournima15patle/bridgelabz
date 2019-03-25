/**
  * @Purpose   :To Maintain the List of CompanyShares in a Linked List So new CompanyShares can
                be added or removed easily
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 21-03-2019
  **/
    var util = require('../../oops programs/oopUtility');
    var link = require('../CompanyShare/linkedList');
    var filestream = require('fs');
    var readline = require('readline-sync');
    var content = filestream.readFileSync('companyShare.json');
    var object = JSON.parse(content);
    var list = new link.LinkedList;

    /*read the object data into the linked list */
    for (var key in object.company) {
        
        list.add(object.company[key]);
    }

function companyShare() {
    
    console.log('\n1.Add \n2.Remove \n3.Save \n4.Display \n5.Exit');
    var choice = readline.question('Enter your choice :');
    while (choice != 5) {
        /** adding the company */
        if (choice == 1) {
            var name = readline.question('Enter company name :');
            var symbol = readline.question('Enter company symbol :');
            var no_of_share = readline.question('Enter no. of share :');
            var share_price = readline.question('Enter shares price :');
            var enterValue = {
                name: name,
                symbol: symbol,
                shares: no_of_share,
                share_per_price: share_price
            }

            list.add(enterValue);
            console.log('----- Company added -----');
            
            companyShare();
        }
        /** code for deleting the company  */
        else
            if (choice == 2) {
                var array = [];
                array = list.printListStock();
                console.log(array);
                var curr = list.head;
                var deleteCompany = readline.question('Enter the company name you want to delete :');
                let n = 0;
                var flag = true;
                while (curr && flag) {
                    n++;
                    if (curr.data.name === deleteCompany) {
                        console.log('curr :', curr.data.name);
                        list.popIndex(n);
                        flag = false;
                    }
                    curr = curr.next;
                }
                if (flag) {
                    console.log('Index not found');
                }

                console.log('Updated List');
                var array = [];
                array = list.printListStock();
                console.log(array);
                companyShare();
            }
            else
                if (choice == 3) {
                    /* to display the companies */
                    var arrayForOutput = [];
                    arrayForOutput = list.printListStock();
                    console.log('Output Array is :');
                    console.log(arrayForOutput);
                    var b = { "company": arrayForOutput }
                    filestream.writeFileSync('./companyShare.json', JSON.stringify(b), 'utf-8', function () {
                        console.log('done')
                    });
                    console.log('Data saved to file');
                    companyShare();
                }
                else
                    if (choice == 4) {
                        var array = [];
                        /* taking list data in array for printing the list */
                        array = list.printListStock();
                        console.log(array);
                        companyShare();
                    }
                    else
                        if (choice == 5) {
                            console.log("exit");
                            process.exit(); /** exit method for exit the program */
                        }
                        else {
                            console.log('-----Invalid choice-----');
                            companyShare();
                        }
    }
}
companyShare();
