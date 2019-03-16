
var readline = require('readline-sync');

module.exports = {

    /*
    *@purpose : To get user input value 
    *@description : call this method whenever we want take input from user
                    and return the value.
    */
    input() {
        const readline = require('readline');

        const read = readline.createInterface({ input: process.stdin, output: process.stdout });
        return read;
    },

    /************************String Anagram Program*************************/

    /*
     *@purpose : To check whether two strings are anagram or not.
     *@param   : str1-first string of user input 
     *           str2-second string of user input 
     *@description :Take two string from user and compare those, and prints the message 
                    wheather they are anagram or not.
     */


    isAnagram(string1, string2) {
        string1=string1+"";
       string2=string2+"";
          
          if (string1.length != string2.length) {
              return false;
          }
          var arr = [];
          for (let index = 0; index < 36; index++) {
              arr[index] = 0;
  
          }
          for (let index = 0; index < string1.length; index++) {
              var ch = string1.charAt(index);
              if (ch >= 'a' && ch <= 'z') {
                  var code = ch.charCodeAt(0);
  
                  arr[code - 97]++;
              } else if (ch >= 'A' && ch <= 'Z') {
                  var code = ch.charCodeAt(0);
                  arr[code - 65]++;
              } else {
                  var code = ch.charCodeAt(0);
                  arr[code - 22]++;
              }
              ch = string2.charAt(index);
              if (ch >= 'a' && ch <= 'z') {
                  var code = ch.charCodeAt(0);
  
                  arr[code - 97]--;
              } else if (ch >= 'A' && ch <= 'Z') {
                  var code = ch.charCodeAt(0);
                  arr[code - 65]--;
              } else {
                  var code = ch.charCodeAt(0);
                  arr[code - 22]--;
              }
  
  
          }
          for (let index = 0; index < 36; index++) {
              if (arr[index] != 0) {
                  return false;
              }
          }
          return true;
  }, 

    /*****************************Prime Numbers***************************/

    /*@Purpose   :To find prime numbers in between 0 t0 1000. */

    primeNumbers() {
        //Evaluating Prime Numbers

        for (var i = 0; i <= 1000; i++) {   // create variable count and assign value 0 to it
            var count = 0

            for (var j = 0; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                return i;
            }
        }
    },

    /********************Prime Numbers that are Anagram and palindrom**************************/

    /* @Purpose: to check prime numbers that are anagram and palindrom*/

    primeAnagramPalindrom() {
        //Evaluating Prime Numbers

        for (var i = 0; i <= 1000; i++) {   // create variable count and assign value 0 to it
            var count = 0

            for (var j = 0; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 2 && i > 10)
             {
                this.palindrom(i);
            }
        }

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
    },
    /************************ Palindrom Number *************************/

    /* @Purpose : to check whether the no. is palindrom or not*/
    palindrom(i) {
        var n = i, rem, rev = 0;
        while (n > 0) {
            // find out the remainder which is the last digit of num
            rem = n % 10;

            rev = rev * 10 + rem;
            n = Math.floor(n / 10);
        }
        if (rev == i) {
            console.log(i + " ");
        }


    },
    /*************************Search and Sort********************************/

    /******************************Binary Search *********************************/

    /* @Purpose : to find the key index by using binary search*/

    binarySearch(arr, low, high, ele) {
        var mid;
        while (high >= low) {
            // calculate mid value 
            mid = Math.floor(low + high / 2);
            // check mid with ele
            if (arr[mid] == ele) {
                return mid;
            }
            //check mid with ele 
            else if (arr[mid] > ele) {
                //assign decremented mid to high 
                high = mid - 1;

            }
            else if (arr[mid] < ele) {
                //assign inremented mid to low
                low = mid + 1;

            }
        }
        // if not found return -1
        return -1;
    },




    /******************************BubbleSort  for String*********************************/
    /*
    *@purpose : generate the bubble sort array  for given array
    *@param   : res-array
    *@description: take array,arrange elements according size using bubble sort,and return the result
    **/
    bubbleSort(arr1, size) {

        // compare first and next elements in array and arrange 

        for (var i = 0; i < size; i++) {
            for (var j = i + 1; j < size; j++) {
                if (arr1[i] > arr1[j]) {
                    //Swap if one element is greter than another element
                    var temp = arr1[i];
                    arr1[i] = arr1[j];
                    arr1[j] = temp;

                }
            }

        }
        return arr1;

    },
    /******************************BubbleSort for Integer*********************************/

    bubbleSortInt(arr1, size) {

        // compare first and next elements in array and arrange 

        for (var i = 0; i < size; i++) {
            for (var j = i + 1; j < size; j++) {
                if (parseInt(arr1[i]) > parseInt(arr1[j])) {
                    //Swap if one element is greter than another element
                    var temp = parseInt(arr1[i])
                    arr1[i] = parseInt(arr1[j])
                    arr1[j] = temp;

                }
            }

        }
        return arr1;

    },

    /****************************Insertion Sort for string**********************************/
    /* @Purpose : Sort the string by using insertion sort technique */
    insertionSort(arr) {
        for (var i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    },

    /****************************Insertion Sort for Integer**********************************/

    insertionSortInt(arr) {
        for (var i = 1; i < arr.length; i++) {
            var key = parseInt(arr[i]);
            var j = i - 1;
            while (j >= 0 && parseInt(arr[j]) > key) {
                arr[j + 1] = parseInt(arr[j]);
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    },


    /********************elapsed time************************/
    elapsedTime(startTimer, stopTimer) {

        var elapsed = stopTimer - startTimer;
        return elapsed;
    },
    /*************************Time elapsed between search and sort methods*********************/

    /* @Purpose :To get Search and Sorted List and print elapsed time
                  performance in descending order */

    searchAndSort(arr, low, high, ele, size) {
        //time elapsed for binary search
        var start = this.getNanoSecTime();
        this.binarySearch(arr, low, high, ele);
        var stop = this.getNanoSecTime();
        var time1 = this.elapsedTime(start, stop);
        console.log("elapsed time for binary search is =" + time1 + " in nanosec");

        //time elapsed for bubble sort of string
        start = this.getNanoSecTime();
        this.bubbleSort(arr, size);
        stop = this.getNanoSecTime();
        var time2 = this.elapsedTime(start, stop);
        console.log("elapsed time for bubble sort is =" + time2 + " in nanosec");

        //time elapsed for bubble sort of Integer
        start = this.getNanoSecTime();
        this.bubbleSortInt(arr, size)
        stop = this.getNanoSecTime();
        var time3 = this.elapsedTime(start, stop);
        console.log("elapsed time for bubble sort is =" + time3 + " in nanosec");

        //time elapsed for insertion sort of string
        start = this.getNanoSecTime();
        this.insertionSort(arr);
        stop = this.getNanoSecTime();
        var time4 = this.elapsedTime(start, stop);
        console.log("elapsed time for insertion sort is =" + time4 + " in nanosec");

        //time elapsed for insertion sort of Integer
        start = this.getNanoSecTime();
        this.insertionSortInt(arr);
        stop = this.getNanoSecTime();
        var time5 = this.elapsedTime(start, stop);
        console.log("elapsed time for insertion sort is =" + time5 + " in nanosec");




    },


    /*******************getting the time in nanoseconds***********************/
    getNanoSecTime() {
        var hrTime = process.hrtime();
        return hrTime[0] * 1000000000 + hrTime[1];
    },


    /*************************Think the Number********************************/

    /*
    *@purpose : is to find the number of user guess
    *@param   : low-zer0
    *           high-user input -1
    *@description : ask the user to enter 2's power value,and find his guessing number,use recursion method 
    * return that number
    */
    search(low, high) {
        if ((high - low) == 1) {
            return low;
        }
        var mid = low + Math.floor((high - low) / 2);
        console.log("Is it less than " + mid + " ?");

        var ans = readline.question("If YES enter 1 else 0 ");
        console.log(ans);
        if (ans == '1') {
            return this.search(low, mid);
        }
        else {
            return this.search(mid, high);
        }

    },

    //method to find power 

    isPower(num) {
        if (num == 0)
            return false;
        while (num != 1) {
            if (num % 2 != 0) {
                return false;
            }
            num = num / 2;
        }
        return true;
    },

    /************************Binary search by using list text*******************************/

    /*Purpose :read the words from the text file and send it to the array */

    binarySearch6() {
        var read = require('fs');
        var text = read.readFileSync("./mytext.txt", 'utf-8');
        var word = text.split(" ");
        word.sort();
        return word;
    },



    /*******************************Merge Sort******************************/

    /*
     *@purpose : sort the array using the merge sort technique  
     *@param   : res-array
     *@description : take array,divide into two halves,and sort the elements for both right and left halves 
     */
    mergeSort(arr) {
        var n = arr.length;
        //if size is equals to 1 return it.
        if (n === 1) {
            // return once we hit an array with a single item
            return arr;
        }
        //cal mid value 
        var mid = Math.floor(n / 2);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid);

        return this.merge(this.mergeSort(left), this.mergeSort(right));

    },

    merge(left, right) {
        var result = [];
        var i = 0;
        var j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            }
            else {
                result.push(right[j]);
                j++;
            }
        }


        return result.concat(left.slice(i)).concat(right.slice(j))
    },


    /******************************Vending Machine*************************************/
    /*
    *@purpose : is to dispence total minimum number of notes from vending machine 
    *@param   : amount-user inputed value
    *           i - zero
    *           notes-zero
    *@description : take a number from user and calculate minimum number of notes has to return vending machine
                    use recursion method,and return the value  
    */
    vendingMachine(amount, i, notes) {
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];

        if (amount == 0 && i == arr.length) {
            console.log("Total number of notes ", notes);
            return;
        }
        if (Math.floor(amount / arr[i]) > 0) {
            console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
            notes = notes + Math.floor(amount / arr[i]);
            amount = amount % arr[i];
            this.vendingMachine(amount, i + 1, notes);
            return;
        }
        this.vendingMachine(amount, i + 1, notes);
    },

    /*********************************DayOfWeek****************************************/
    /*
        *@purpose : to find day falls on the given user input date format
        *@param   : day-take date from command line of user choice 
        *           month-take month from command line of user choice
        *           year- take year from command line of user choice
        *@description : use formula and calculate the day 
        */

    dayOfWeek(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        //console.log(d0);
        return d0;


    },

    /***********************************Decimal to Binary**********************************/
    /*
   *@purpose : calculate the binary value 
   *@param   : num-decimal value from user 
   *@description : take decimal value from user and convert that into binary value 
   */
    toBinary(num) {
        var str = "";

        while (num > 0) {
            var rem = num % 2;
            str = rem + str;
            num = Math.floor(num / 2);

        }

        //to generate padding 4 byte

        while (str.length < 8) {
            str = "0" + str;
        }
        return str;
    },

    
    /************************************Temperature Conversion******************************/
    /*
     *@purpose: Convert the celsius to fahrenheit and vice versa of user choice conversion
     *@param  : number-user choice 
     *@description: ask users wish, weather to celsius to fahrenheit or fahrenheit to celsius 
     *and convert according to his wish and prints the results.
     */
    tempConversion(number) {
        if (number == 1) {
            //taking temperature input in celsius
            var celIn = readline.question('enter temp in celsius');
            //conversion from celsius to temperature
            var far = (celIn * (9 / 5) + 32);
            console.log('temperature in fahrenheit' + far);
        }
        else if (number == 2) {
            //taking temperature input in fahrenheit
            var farIn = readline.question('enter temp in fahrenheit');
            //conversion from temperature to celsius
            var cel = (farIn - 32) * (5 / 9);
            console.log('temperature in celsius' + cel);
        }
        else {
            console.log('Invalid Input');
        }
    },

    /**********************************Monthly Payment***********************************/

    /*
     *@purpose: to find the monthly-payment and prints the results 
     *@param  : principle-principle value from commandline
     *          year-year value from command line
     *          rate- rate value from command line
     *@description : take command line input of principle and year and rate 
     *and find the monthly payment 
     */
    monthlyPayment(principle, year, rate) {
        var n = 12 * year;
        var r = rate / (12 * 100);
        var p = Math.pow((1 + rate), (-n))
        //calculate the monthly payment
        var payment = (principle * r) / (1 - p);
        console.log('The monthly payment is: ' + payment);
    },

    /************************************Square Root Number*******************************/

    /*
     *@purpose :to find square root for non negative number by using the newton method 
     *@param : num-user input value
     *@description :take value from the user and calculate the square of that number 
     *and prints the result.
     */
    sqrt(num) {
        if (num > 0) {
            var t = num;
            //formula 
            var epsilon = 1e-15;
            while (Math.abs(t - num / t) > epsilon * t) {
                t = (num / t + t) / 2;
            }
            console.log("Square root of number is : ", t)
        }
        else {
            console.log("Number should be positive ");
        }
    },

    /**
     * @purpose :convertion of decimal value to the binary 
     * @param   :num-decimal value from user 
     * @description: take decimal value from user and conver it into the binary form
     *swap the generated nibbles and by using that binary value convert it into decimal form
     */
    bin(num) {
        // take empty string 
        var str = "";
        //loop get binary value 
        while (num > 0.99) {
            var a = Math.floor(num % 2);
            //adding bytes one by one 
            str = (a + str);
            num = num / 2;
        }
        console.log('decimal to binary value is:' + str);

        //condition for checking 8 bit 
        while (str.length < 8) {
            str = '0' + str;     // add 0 to make string 8 bit
        }
        console.log("nibble", str);
        var nib1 = str.substring(0, 4);  //First nibble 
        var nib2 = str.substring(4, 8);  // second nibble
        console.log("first nibble", nib1);
        console.log("second nibble", nib2);
        var result = nib2 + nib1;               // swaping of nibbles 
        console.log("after the nibble swap", result);
        var newDec = this.binaryToDecimal(result);  // call this method to get decimal value 
        console.log(newDec);
    },

    /**
    * @purpose:to convert the binary value to the decimal 
    * @param  : res-binary value 
    * @description :convert binary value into the decimal value and return the result
    */
    binaryToDecimal(result) {
        var sum = 0;
        for (let i = 0; i < result.length; i++) {
            //condition to check binary 1 value 
            if (result[result.length - (i + 1)] === '1') {
                // calculate the 2's power value
                sum = sum + 2 ** i;
            }
        }
        return sum;

    },

}