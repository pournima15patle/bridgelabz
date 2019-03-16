/**
  * @Purpose   :To check the paranthesis balanced or not.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 13-03-2019
  **/
try{
var stackaccess = require('../DSUtility/Stack');
var readline = require('readline-sync');

function stack() {

    var st = new stackaccess.Stack;
    var str = readline.question("Enter your mathematical expression with parantheses ");
    var ch, i;

    for (i = 0; i <= str.length; i++) {
        ch = str.charAt(i);

        if (ch == '(' || ch == '[' || ch == '{') {
            st.push(ch); //push '(','['and '{' in to the stack if its occure in expression

        }
        else {
            switch (ch) {
                case ')': if (st.pop() != '(') { //Pop '(', if case have a choice ')'.

                    return false;
                }
                    break;
                case ']': if (st.pop() != '[') { //Pop '[' , if case have a choice ']'.
                    return false;
                }
                    break;
                case '}': if (st.pop() != '{') {//Pop '{', if case have a choice '}'.
                    return false;
                } break;
            }
        }


    }
    // To check the stack is empty or not
    if (st.isEmpty()) {
        console.log("expression  is balanced");

    }
    else {
        console.log("Not balanced");
    }
} stack();
}
catch(err)
{
    console.log(err);
}




