
var u = require("./UtilityProgram");

var readline = require('readline-sync');

module.exports = {

  /*
    *@purpose : To get user input value 
    *@description : call this method whenever we want take input from user 
    *               and return the value.
    */
  input() {
    const readline = require('readline');

    const read = readline.createInterface({ input: process.stdin, output: process.stdout });
    return read;
  },

  /************************************ array **************************************/
  /*@description: taking input in array from user*/

  insertArray(arr) {
    var number = readline.question("Enter total number of array elements");
    console.log("Enter your Array elements");
    // stores elements by elements in array 
    for (let index = 0; index < number; index++) {
      arr[index] = Number(readline.question("_"));

    }
    return arr;
  },



  /************************************Replace String*********************************/

  /*
     * @Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
     *             and print the string.
     *  @descriptipn: Declaring the function and passing the userinput as argument.
     *  @function: displayname takes the userinput and print it with some sentence.
     */

  replaceString(str1, str2, userName) {
    if (userName.length >= 3) {
      var resultedString = str1.replace(str2, userName);
    }
    console.log(resultedString);
  },


  /************************************Flip Coin**************************************/

  /** @purpose : By using random function flip the coin no of times from user input
    *            and print the percentage of head vs tails
    **/

  /*
   * @description : Declaring a function and passing the userinput for fliping the coin
   *                no of times
   * @function: coinFlip function declaring to generate random number
   *           
   */

  coinFlip(N) {
    var headCount = 0;
    var tailCount = 0;

    for (var i = 0; i < N; i++) {
      var randomNo = Math.random() * 2;

      if (randomNo > 0.5) {
        headCount++;
      }
      else {
        tailCount++;
      }
    }
    console.log("total no. of heads:" + headCount);
    console.log("total no. of tails:" + tailCount);
    var total = headCount + tailCount;
    var headPer = (headCount * 100) / total;
    var tailPer = (tailCount * 100) / total;
    console.log("Head Percentage are:" + headPer);
    console.log("Tail Percentage are:" + tailPer);
  },

  /************************************Leap Year*******************************************/
  /*
   * @purpose : Taking input as a fourdigit number check whether the given number is a leap year
   *            or not. 
   * @description : Declaring the function and passing a four digit number from userinput
   * @function:  Function compares the length of given number and prints the number 
   *             is a leap year or not 
   */

  checkLeapYear(year1) {
    if (year1 % 400 == 0 || year1 % 4 == 0 && year1 % 100 !== 0) {
      return true;
    }
    else {
      return false;
    }
  },



  /*********************************Power of 2*************************************/
  /* @purpose : generate the power of two values 
   * @param   : user input value
   * @description : it prints the two's power value 
   */
  power2(N) {
    var power = 1;
    if (N >= 0 && N < 31) {
      for (var i = 0; i <= N; i++) {
        console.log("Power of 2^" + i + "is: " + Math.pow(2, i));
      }
    }
  },



  /**********************************Harmonic****************************************/

  /* 
     * @purpose : To genarate harmonic numbers according to the userinput
     * @param    : input from user
     * @description : To generate the sum of harmonic numbers by taking input from user
     * @function : Harmonic function takes user input and sum it no of times that user given
     */

  harmonic(N) {
    var i = 1;
    var sum = 0;
    while (N != 0 && i <= N) {
      sum = sum + (1 / i++);
    }
    return sum;
  },


  /******************************Prime Factors****************************/

  /* @purpose : To genarate primeFactor numbers according to the userinput
   * @description : Finding the primefactors of a given number 
   */



  primeFactor(Num) {
    for (var i = 2; i <= Num; i++) {
      while (Num % i == 0) {
        console.log(i);
        Num = Num / i;
      }
    }
    if (Num > 2) {
      console.log(Num);
    }
  },

  /**********************************Gambler******************************************/

  /*GAMBLER*/
  /*
  * @purpose : To calculate the total number of wins and percentage of wins and loss
  * @param   : stack- amount that player have 
  * @param   : goal - amount that player want to win 
  * @param   : totaltime -no of times he wants to play 
  * @description : the game continue upto, if player reached his goal,
  *               or he lost all his money or he lost his total number of times he want play.
  */
  gambler(stack, goal, totalTime) {
    var win = 0; var noOfTime = 0;

    //loop upto win and lost his all stack and upto total number of times he wants play 
    while (stack != 0 && goal != stack && noOfTime < totalTime) {
      // genearate the random number to check weather he wins or lost
      var ran = Math.round(Math.random());
      if (ran == 1) {
        stack++;
        win++;
      }
      else {
        stack--;
      }
      noOfTime++;
    }
    // calculating the total percentage 
    var winPer = (win / totalTime) * 100;
    var loosPer = 100 - winPer;
    console.log("Number of wins " + win)
    console.log("wining percentage " + winPer);
    console.log("lossing percentage " + loosPer);

  },

  /***************************Coupon Numbers***********************************/

  /*@purpose: To get distinct coupon numbers
   *@function:Functions to generate random number and to process distinct coupons.
   */
  couponNumbers(num) {
    var arr = [];
    var N1 = 0;
    while (N1 != num) {
      var RNum = Math.floor(Math.random() * num);
      if (!arr.includes(RNum)) {
        arr.push(RNum);
        N1++;
      }

    }
    console.log("generatrd coupon numbers are:")
    console.log(arr);
  },


  /*06/03/19*/
  /************************StopWatch Program******************************* */
  /*
   *@purpose : To calculate the time that elapses between the start and end clicks
   *@param   : start-when execution start
   *@param   : stop - when execution stop
   *@Description : create object of Date and get time in seconds by using inbuild function
   */

  elapsedTime(startTimer, stopTimer) {

    var elapsed = stopTimer - startTimer;
    return elapsed;
  },


  /************************Two Dimensional Array******************************/
  /*
     *@purpose :to print Two Dimensional Array,from user input elements 
     *@param   : row-number of rows & column-number of columns
     *@description :ask user to enter total number of column and row
     *convert into two Dimenstional array format and prints 
     */

  twoDArray(row, column) {

    var arr = [];
    console.log("enter elements : ");
    //to generate the multi-dimensional array
    for (var i = 0; i < row; i++) {
      arr[i] = [];
      // adding elements by elements in generated array
      for (var j = 0; j < column; j++) {
        var ele = readline.question('');
        arr[i][j] = ele;
      }

    }
    return arr;
  },



  /************************** Sum of three integers adds to 0*****************************/
  /*
    *@purpose :to find triplets from user input array elements
    *@param   :array elements
    * @description :if sum of 3 array elemets equals to zero its called triplet
    *prints the total triplets formed  
    */

  sumOfThree(arr1, size) {
    if (size != 0) {
      for (i = 0; i < size - 2; i++) {
        for (j = i + 1; j < size - 1; j++) {
          for (k = j + 1; k < size; k++) {
            // printing distinct triples (i, j, k) where arr[i] + arr[j] + arr[k] = 0

            if (parseInt(arr1[i]) + parseInt(arr1[j]) + parseInt(arr1[k]) == 0) {
              console.log("Distinct triplets")
              console.log(arr1[i] + " " + arr1[j] + " " + arr1[k]);

            }
          }
        }
      }
    }
    else {
      console.log("value is not present which will calculate triplet")
    }
  },

  /**********************************Distance******************************************/
  /**
   * @Purpose :To find euclidean distance from the point (x, y) to the origin (0, 0).
   */
  distance(x, y) {
    var dist = Math.sqrt(x * x + y * y);

    console.log("distance from point (" + x + ", " + y + ") to (0, 0) = " + dist);
  },

  /***********************************Quadratic*************************************/
  /*
  *@purpose : To calculate the Quadartic roots using user input value.
  *@param   : a-first element
              b-second element
              c-third element
  *@description : calculate the roots by using the formula and prints all possible roots.
  *
  */

  quadratic(a, b, c) {
    if (a == 0) {
      console.log("Not a Quadratic Equation")
    }
    else {
      // calculate the delta(variable) value
      var delta = (b * b) - (4 * a * c);
      //check delta value 
      if (delta == 0) {
        // roots are real and equal
        var root = -b / (2 * a);
        console.log("roots are same : ", root);
      }
      // check delta value 
      else if (delta > 0) {
        //calculate the roots 
        var root1 = (-b + Math.sqrt(delta)) / 2 * a;
        var root2 = (-b - Math.sqrt(delta)) / 2 * a;
        // roots are real and unequal
        console.log("First root : ", root1);
        console.log('Second root : ', root2);
      }
      //check delta value
      else if (delta < 0) {
        //roots are real and imaginary
        var root1 = -b / (2 * a);
        var root2 = (Math.sqrt(-delta)) / 2 * a;
        console.log("Frist root : ", root1, "i", root2);
        console.log("second root : ", root1, "-i", root2);
      }
      else {
        console.log("Invalid input ")
      }
    }

  },

  /***************************************WindChill**************************************/
  /*
     *@purpose :to find the windchill, by using user input temperature and volume
     * @param  : temp-temperature from the user input
     *           vol-volume from the user input 
     *  @description :first check the input for temperture is in range 
     *                and for the volume range, and prints the results
     * */
  windChill(t, v) {
    if (t <= 50) {
      if (v > 3 && v < 120) {
        var vol = Math.pow(v, 0.16);
        //Formula for the Windchill calculation 
        var wc = 35.74 + (0.6215 * t) + ((0.4275 * t) - 35.75) * (vol);
        console.log("The total windchill for Temperature ", t, " and Volume ", v, " is = ", wc);
      }
      else {
        console.log("Invalid volume Range ");
      }
    }
    else {
      console.log("Invalid Temperature ");
    }

  },
  /*
      *@purpose :to find the permutation of given string and prints all combination
      *@param   : string-empty 
                  str-user input string 
                  first-first index
                  last-last index
      *@description :check all possible combination of string 
      *use recursion method to find possible combination
      *prints the all combination
      */
  permutation(string, str, first, last) {
    if (first == last) {
      console.log(str);
      string = string + str;
    }
    else {
      for (let index = first; index <= last; index++) {
        //call swapstring method swap the characters 
        str = this.swapString(str, first, index);
        // recursion method 
        string = this.permutation(string, str, first + 1, last);
        str = this.swapString(str, first, index);
      }
    }
    return string;
  },
  // swap method for swaping the string character
  swapString(str, first, last) {
    var as = '';
    //empty array
    var ch = [];
    //split string into the character
    ch = str.split('');
    // temporary variable
    var temp = ch[first];
    ch[first] = ch[last];
    ch[last] = temp;
    for (let index = 0; index < str.length; index++) {
      as = as + ch[index];
    }
    return as;
  },

  /************************************* Tic tac Toe ******************************************/

  ticTacToe(check, counter, player) {
    if (check) {
      if (counter <= 9) {
        if (player == 0) {
          this.showGame();
          player = this.getPlayer();
          this.ticTacToe(check, counter, player);
        }
        else if (player == 1) {
          this.player();
          this.checkWin('x');
          player = 2;
          counter++;
          this.ticTacToe(check, counter, player);
        }
        else if (player == 2) {
          this.computer();
          this.checkWin('0');
          player = 1;
          counter++;
          this.ticTacToe(check, counter, player);
        }
        else {
          console.log("Draw Match.");
        }
      }
    }
  },

  /**
   * This method is for System
   * Generate position and then mark 0
   */
  computer() {
    var a = Math.random() * 3;
    var b = Math.random() * 3;
  }

}
