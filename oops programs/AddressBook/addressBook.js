/**
 * @Purpose : To create the address book for person where new person can be add , remove the person from 
 *            address book can be update the person data.
 */
var readline = require('readline-sync');
var filestream = require('fs');

class AddressBook {

    address_book(data) {
        /*read the choice from user */
        var answer = readline.question("  Press \n 1.To add Person \n 2. To update Person \n 3. To delete Person \n 4. To sort the file by Zip \n 5. To sort the file by name \n 6. To display \n 7. To exit ");
        switch (answer) {
            case '1': this.addPerson(data);
                break;
            case '2': this.update(data);
                break;
            case '3': this.deleted(data);
                break;
            case '4': this.sortingZip(data);
                break;
            case '5': this.sortingName(data);
                break;
            case '6': this.displ(data);
                break;
            case '7': console.log("  Thank you  ");
                break;
            default: console.log("------wrong input------ ");
                this.address_book(data);
        }

    }
    set(key, value){
        if(typeof value !== 'undefined')
            this[key] = value;
    }
    get(key, value){
        if(typeof value !== 'undefined')
            this[key] = value;
    }
    setInput(name, option){
        set(name, readline.question(option));
    }

    processAddPerson(){
        for(let q in question)
            setInput(name, question[q])
    }


    addPerson(data) {
        /* read the person data for adding the person in address book */
        var firstname = readline.question(" Enter First name of person  ");
        var lastname = readline.question(" Enter Last name of person   ");
        var contact = readline.question(" Enter contact number of person ");
        var address = readline.question(" Enter address of person ");
        var state = readline.question(" Enter state of person ");
        var zip = readline.question(" Enter zip code of person ");

        /* store the person data in person object */
        data.person.push({
            First_name: firstname,
            Last_name: lastname,
            Contact: contact,
            Address: address,
            State: state,
            Zip: zip
        })
        /*Store the data in json file */
        filestream.writeFileSync('address.json', JSON.stringify(data));
        this.address_book(data);

    }
    displ(data) {
        /* display the person data */
        console.log(data);
        this.address_book(data);
    }

    /** for removing the person data which is present in address book */
    deleted(data) {
        var ans = readline.question("press \n1.choose name \n 2. choose contact number  ");
        /** Remove the person data from address book using name */
        if (ans == 1) {
            let res = readline.question("Enter first name of the person ")
            for (let i = 0; i < data.person.length; i++) {
                if (data.person[i].First_name == res) {
                    var index = data.person.indexOf(data.person[i]);

                    data.person.splice(index, 1);
                }
            }
            filestream.writeFileSync('address.json', JSON.stringify(data));
            this.address_book(data);
        }
        else if (ans == 2) {
            /** Remove the person data from address book using contact */
            let res = readline.question("Enter the mobile number of the person")
            for (let i = 0; i < data.person.length; i++) {
                if (data.person[i].Contact == res) {
                    var index = data.person.indexOf(data.person[i]);
                    data.person.splice(index, 1);
                }
            }
            /** Write the person data after removing person */
            filestream.writeFileSync('address.json', JSON.stringify(data));
            this.address_book(data);
        }
    }
    /** Sort the address book by using zipcode */
    sortingZip(data) {
        let refer = data.person;
        function sortbyzip(a, b) {
            return (a.Zip - b.Zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);
        this.address_book(data);
    }
    /* Sort the address book using person name */
    sortingName(data) {
        let refer = data.person;
        function sortbyname(a, b) {
            if (a.First_name == b.First_name) {
                return 0;
            }
            else if (a.First_name > b.First_name) {
                return 1;
            }
            else if (a.First_name < b.First_name) {
                return -1;
            }
        }
        let res = refer.sort(sortbyname);
        console.log(res);
        this.address_book(data);
    }
    /** Update the person data using update method */
    update(data) {
        let ans = readline.question("Enter the  name of the exsting person ");
        var count=0;
        for (let i = 0; i < data.person.length; i++) {
            filestream.writeFileSync('address.json', JSON.stringify(data));
            if (data.person[i].First_name == ans || data.person[i].Contact == ans) {
                count==1;
                var que = readline.question("\nPrees \n 1. To update First name \n 2. To update Last name \n 3. To update contact \n 4.To update state \n 5. To update Address \n 6. To update zip \n 7. To Exit  ");
                if (que == 1) {
                    /* Update first Name of person */
                    let res = readline.question("Enter the new  First name of person ");
                    data.person[i].First_name = res;
                    this.save(data);
                    this.address_book(data);
                }
                else if (que == 2) {
                    /*Update last name of Person */
                    let res1 = readline.question("Enter the new Last name of the person  ");
                    data.person[i].Last_name = res1;
                    this.save(data);
                    this.address_book(data);
                }
                else if (que == 3) {
                     /*Update contact of Person */
                    let res2 = readline.question("Enter the new contact number  ");
                    data.person[i].Contact = res2;
                    this.save(data);
                    //filestream.writeFileSync('address.json', JSON.stringify(data));
                    this.address_book(data);
                }
                else if (que == 4) {
                     /*Update state of Person */
                    let res3 = readline.question("Enter the new state name ");
                    data.person[i].State = res3;
                    this.save(data);
                    this.address_book(data);
                }
                else if (que == 5) {
                     /*Update Address of Person */
                    let res4 = readline.question(" Enter the new address ");
                    data.person[i].Address = res4;
                    this.save(data);
                    this.address_book(data);
                }
                else if (que == 6) {
                     /*Update zip code of Person */
                    let res5 = readline.question("Enter the new zip ");
                    data.person[i].Zip = res5;
                    this.save(data);
                    this.address_book(data);
                }
                else if (que == 7) {
                    // return;;
                    this.address_book(data);
                }
                else{
                    console.log('invalid input');
                }


            }
        }
        if(count==0){
            console.log('Person not found');
        }
    }
    /** save the data into the json file */
    save(data) {
        filestream.writeFileSync('address.json', JSON.stringify(data));
        this.update(data);
    }


} module.exports = {
    AddressBook
}