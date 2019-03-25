/**
  * @Purpose   :write hashing function to search number in slot if number is found, then add otherwise remove it
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 15-03-2019
  **/

var list = require('../DSUtility/LinkedList');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var utility = require('../DSUtility/WriteFile');
try {
    function hashing() {
        var file = filestream.readFileSync('hashNum.txt', 'utf8');
        var num = file.split(' ');
        var arr = new Array(10);
        var remainder, n;

        for (let i = 0; i < num.length; i++) {
            n = Number(num[i]);
            remainder = n % 10;

            if (arr[remainder] === undefined) {
                arr[remainder] = new list.LinkedList;
                arr[remainder].add(n);
            } else {
                arr[remainder].add(n);

            }
        }
        var str = "";
        for (let index = 0; index < 10; index++) {
            take.print(index + " elements    ");
            try {
                arr[index].show();

            } catch (err) {
                console.log("empty index");
            }

        }
        var number = readline.question(' Enter the number you want to search \n');
        if (!isNaN(number)) {
            remainder = Number(number % 11);
            console.log(remainder);
            console.log(arr[1]);
            if (arr[remainder] === undefined) {
                arr[remainder] = new list.LinkedList;
            }
            if (arr[remainder].search(Number(number))) {
                console.log("The number is found in file");
                arr[remainder].remove(number);

            } else {
                console.log("Number is not found in file");
                arr[remainder].add(number);
            }
            var flag;
            for (let index = 0; index < 10; index++) {
                flag = true;
                take.print(index + " result elements ,   ");
                try {
                    arr[index].show();
                    str = str + arr[index].getData();
                    if (arr[index] !== 'undefined' && index < arr.length - 2) {
                        str = str + " ";
                    }
                } catch (err) {
                    console.log("Empty index");

                }

            } console.log(str);
            utility.writeFile('hashNum.txt', str);

            console.log("\n\n");
        } else {
            console.log("Wrong input ");
        }

    }
    hashing();
}
catch (err) {
    console.log(err);
}