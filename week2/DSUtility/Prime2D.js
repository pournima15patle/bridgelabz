/**
 * @Purpose:Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
                the prime numbers in a 2D Array
 */
var req=require('util');
module.exports = {

    primeNumber2D() {
        var array = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        var i = 0; var j = 1; var range = 100; var arr=[];
        for (let prime = 2; prime <= 1000; prime++) {
            if (this.isPrime(prime)) {
                if (prime <= range) {
                    array[i][j] = prime;
                    j++;
                }
                else {
                    j = 1;
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }
            }
        }
       
        console.log("The prime numbers are presents in the given range ");
        for (var i = 0; i < array.length; i++)
         {
             arr[i]=[];
            for (var j = 0; j < array[i].length; j++) {
               req.print(array[i][j] + "  ");
               // console.log(array[i][j] + " ");
            }
            console.log();
        }
        console.log();
},




    isPrime(number) {
    if (number == 0 || number == 1) {
        return false;
    }
    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            return false;
        }

    }
    return true;
}
}