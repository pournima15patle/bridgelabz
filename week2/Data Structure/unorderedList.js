/**
 * @Purpose   :To create Unordered linked list Take a user input to search a Word in the List. 
 *             If the Word is not found then add it to the list, and if it found then remove the
 *             word from the List.
 * @author    : pournima15patle
 * @version   : 1.0
 * @since     : 12-03-2019
 **/

var list=require('../DSUtility/LinkedList');
var filestream=require('fs');
var readline=require('readline-sync');
var writeUtil=require('../DSUtility/WriteFile');

try{
function unordered() {
    var string = filestream.readFileSync('string.txt','UTF-8');
    //console.log(typeof(string))
    var array = string.split(' ');

    var unord = new list.LinkedList;
    for (let i = 0; i < array.length; i++) {
        unord.add(array[i]);
    }
    unord.show();

    var answer = readline.question("Enter the word do you want to search  ");
    if (!isNaN(answer)) {
        console.log("input should be in string form ");
        return;
    }
    else {
        if (unord.search(answer)) {
            unord.remove(answer);
        }
        else {
            unord.add(answer);
        }
    }

    // unord.show();
    var word = unord.getData();
    writeUtil.writeFile('string.txt', word);
    console.log("Linked list elements are ");
    unord.show();
}
unordered();
}
catch(err){
    console.log(err);
}