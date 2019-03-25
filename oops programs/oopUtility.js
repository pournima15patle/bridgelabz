var filestream = require('fs');
var readline = require('readline-sync');
var req = require('util');

module.exports = {

    inventory(object) {
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;
        /*calculating the total price of rice.*/
        for (var key in rice) {
            console.log('\n');
            console.log("The total price of ", rice[key].rice_name, " is ", rice[key].weight * rice[key].price);
        }
        /*calculating the total price of wheat.*/
        for (var key in wheat) {
            console.log('\n');

            console.log("The total price of ", wheat[key].wheat_name, " is ", wheat[key].weight * wheat[key].price);
        }
        /*calculating the total price of pulses. */
        for (var key in pulses) {
            console.log('\n');
            //console.log(pulses[key]);

            console.log("the total price of ", pulses[key].pulse_name, " is ", pulses[key].weight * pulses[key].price);
        }
    },

    regexExpression(name, fullName, contact, answer) {
        /*reading the text file*/
        var content = filestream.readFileSync('regExp.txt', 'utf8');
        /*replace user Name ,full name, contact and content*/
        content = content.replace(/<<name>>/g, name);
        content = content.replace(/<<full name>>/g, fullName);
        content = content.replace("xxxxxxxxxx", contact);
        content = content.replace("xx/xx/xxxx", answer);
        /*save updated text into the text file*/
        filestream.writeFileSync("regExp.txt", content);
        console.log(content);

    },


    deck2D() {
        //suit array for taking suits
        var suit = ["♣️", "♦️", "❤️", "♠️"];
        //rank array for taking rank of cards
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        var deck = new Array();
        //calculate total cards 
        var n = suit.length * rank.length;
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                /*push the all cards in deck array */
                deck.push(temp + rank[j] + " " + suit[i]);
            }
        }

        for (let i = 0; i < n; i++) {
            var random = parseInt(Math.random() * deck.length)
            /* for suffling the cards */
            var temp = deck[i];
            deck[i] = deck[random];
            deck[random] = temp;
        }
        var arr = [[], [], [], []];
        var x = 0, y = 9
        /**assign 9 card for one person */
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 9; j++) {
                arr[i][j] = deck[j + x];
            }
            x = x + 9;

        }
        console.log(arr);
        for (var i = 0; i < 4; i++) {
            arr[i] = [];
            for (var j = 0; j < 9; j++) {
                req.print(arr[i][j] + " ")
            }
        }


    },

    deckOfCards() {
        var queue = require('../week2/DSUtility/QueueLinked');
        var sort = require('../week1/AlgoUtility/Utility1');
        var take = require('util');
        var person1 = new queue.QueueLinked;
        var person2 = new queue.QueueLinked;
        var person3 = new queue.QueueLinked;
        var person4 = new queue.QueueLinked;
        //suit array for taking suits
        var suit = ["♣️", "♦️", "❤️", "♠️"];
        //rank array for taking rank of cards
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        var deck = new Array();
         //calculate total cards 
        var n = suit.length * rank.length;
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                /*push the all cards in deck array */
                deck.push(suit[i] + rank[j] + "");
            }
        }

        for (let i = 0; i < n; i++) {
            var random = parseInt(Math.random() * deck.length)
            /* for suffling the cards */
            var temp = deck[i];
            deck[i] = deck[random];
            deck[random] = temp;
        }
        var x = 0, y = 9;
        var array = [];
        for (let i = 0; i < deck.length; i++) {
            //assign the cards for players.
            if (i < 13) {
                person1.enqueue(deck[i]);
            } else if (i < 26) {
                person2.enqueue(deck[i]);
            } else if (i < 39) {
                person3.enqueue(deck[i]);
            } else {
                person4.enqueue(deck[i]);
            }
        }
        array1 = person1.getData().split(' ');
        array2 = person2.getData().split(' ');
        array3 = person3.getData().split(' ');
        array4 = person4.getData().split(' ');
        /** for sorting the cards rankwise */
        sort.insertionSort(array1);
        sort.insertionSort(array2);
        sort.insertionSort(array3);
        sort.insertionSort(array4);
        /** Assign the cards for each player */
        console.log("Player 1 have this cards :  " + array1.join());
        console.log("Player 2 have this cards :  " + array2.join());
        console.log("Player 3 have this cards :  " + array3.join());
        console.log("Player 4 have this cards :  " + array4.join());

    },

    clinicManagement(data) {

        var doctor = data.Doctor;
        var patient = data.Patient;
        console.log(patient)
        var answer = Number(readline.question("Press 1 to search doctor \n and press 2 to search patient"));
        {
            if (answer == 1) {
                let inf = readline.question("Press \n 1. to search doctor by his name \n 2. by ID ,\n 3.by Specialization ");
                if (inf == 1) {
                    var nam = readline.question("Enter the name of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].name == nam) {
                            console.log('nam')
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment(data, doctor, patient);
                }
                else if (inf == 2) {
                    var idn = readline.question("Enter the ID of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].Id == idn) {
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else if (inf == 3) {
                    var spc = readline.question("Enter the Specialization of doctor ");
                    for (var key in doctor) {
                        if (doctor[key].Specialization == spc) {
                            console.log("----your doctor information----");
                            console.log(doctor[key]);
                        }
                    }
                    this.appointment();
                }
                else {
                    console.log("Enter valid input");
                    this.clinicManagement(data);
                }
            }
            else if (answer == 2) {
                let inf = readline.question("Press \n 1. to search patient by his name \n 2. by ID ,\n 3.by Mobile number ");
                if (inf == 1) {
                    var nam = readline.question("Enter the name of Patient ");
                    for (var key in patient) {
                        if (patient[key].name == nam) {
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    this.appointment();
                }
                else if (inf == 2) {
                    var idn = readline.question("Enter the Id of Patient ");
                    for (var key in patient) {
                        if (patient[key].Id == idn) {
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    //this.appointment();
                }
                else if (inf == 3) {
                    var mob = readline.question("Enter the mobile number of Patient "); deck2D
                    for (var key in patient) {
                        if (patient[key].Contact_number == mob) {
                            console.log("----your Patient information----");
                            console.log(patient[key]);
                        }
                    }
                    //this.appointment();
                }
                else if (inf == 4) {
                    return;
                }
                else {
                    console.log("Enter the valid input")
                }
            }
            else {
                console.log("Enter valid input")
            }
        }

    },
    appointment(data, doctor, patient) {
        var spec = readline.question("enter the specialization of doctor");
        for (var key in doctor) {
            if (doctor[key].Specialization == spec) {
                console.log(doctor[key].name + ' is available on' + doctor[key].onDay);
            }
        }
        console.log("you can take appointment");
        var name = readline.question("enter the name of patient");
        console.log(patient);
        for (var key in patient) {
            console.log(patient);
            if (patient[key].name == name) {
                console.log('your appointment is fixed')

            }
            // }
            else {
                var name = readline.question("enter the name of patient");
                if (!isNaN(name)) {
                    console.log('please enter valid name of patient');
                    var name = readline.question("enter the name of patient");
                    return;
                }
                var age = readline.question('enter the age of patient');
                if (isNaN(age)) {
                    console.log('please enter valid age ');
                    var age = readline.question('enter the age of patient');
                    return;
                }
                var contact = readline.question('enter the patient contact no.');
                if (contact > 999999999 && contact < 9999999999) {
                    console.log("please,enter 10 digit mobile no");
                    var contact = readline.question('enter the patient contact no.');
                }
                var id = Math.random() * 5;

                data1.patient.push({
                    name: name,
                    Id: id,
                    Contact_number: contact,
                    age: age
                })
                filestream.writeFileSync('clinic.json', JSON.stringify(data));
                return;
            }
        }
    },
}