/**
 * @Purpose : To find the number of binary search tree for perticular node 
 */

var readline = require('readline-sync');
module.exports = {

    binarySearchTree() {
        var number = readline.question("Enter the total number of test cases");
        var arr = [];
        console.log("Enter your integers");
        for (var i = 0; i < number; i++) {
            arr[i] = readline.question(' ');
        }
        console.log(arr);
         var first,second;
         //to calculate the total number of binary search tree. 
        for (var j = 0; j < arr.length; j++) {
            var first =  (this.factorial(2*Number(arr[j])));
            var second = Number((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
             var result = Math.floor((first / second));
             console.log("The total number of Node required for "+arr[j]+" is "+result);
       }
       

    },

    // to find the factorial of perticular number.
    factorial(num) {
        if(num>0)
        {
        if (num == 0 || num == 1) {
            return 1;
        }
        return num*this.factorial(num-1);
    }
    }
}