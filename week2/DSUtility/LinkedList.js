class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let n = new Node(data);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = n;
        }
    }

    insertFirst(data) {
        let n = new Node(data);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        }
        else {
            n.next = this.head;
            this.head = n;
            this.size++;
            return;
        }
    }

    insert(index, data) {
        if (index == 1) {
            this.insertFirst(data);
            return;
        }
        if (this.head == null) {
            return;
        }

        var n = new Node(data);
        var c = 0, pre = this.head, curr = this.head;
        while (curr) {
            if (c == index - 1) {
                pre.next = n;
                n.next = curr;
                this.size++;
                return;
            }
            c++;
            pre = curr;
            curr = curr.next;
        }
        return false;
    }

    deleteFirst() {
        if (this.head == null) {
            console.log("No element present in the list");
            return;
        }
        var n = this.head.data;
        this.head = this.head.next;
        this.size--;
        return n;
    }

    pop() {
        if (this.head == null) {
            console.log("No element present in the linked list");
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        var curr = this.head;
        var pre = this.head;
        while (curr.next != null) {
            pre = curr;
            curr = curr.next;
        }
        pre.next = null;
        this.size--;
        return curr.data;

    }

    popIndex(index) {
        if (index < 0) {
            console.log("please, enter valid index");
            return false;
        }
        else if (index == 1) {
            this.deleteFirst();
            return;
        }
        var curr = this.head, pre = curr, c = 0;
        while (curr) {
            if (c == index - 1) {
                pre.next = curr.next;
                this.size--;
                return curr.data;

            }
            c++;
            pre = curr;
            curr = curr.next;
        }
        return null;
    }


    remove(data) {

        var curr = this.head;
        if (curr.data == data) {
            this.deleteFirst();
            return;
        }
        var pre = curr;
        while (curr) {
            if (curr.data == data) {
                pre.next = curr.next;
                this.size--;
                return curr.data;

            }

            pre = curr;
            curr = curr.next;
        }
        return null;
    }

    search(item) {
        if (this.head == null) {
            return false;
        }
        var curr = this.head;
        while (curr) {
            if (curr.data == item) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    isEmpty() {
        if (this.size == 0) {
            return true;
        }

        return false;
    }

    sizeOfList() {
        return this.size;
    }

    displayQueue() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data + " ";
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        return str;
    }

   /* 

    addAscending() {
        var main = this.head;
        var mainHead = null;
        while (main) {
            var n = new Node(main.data);
            var flag = true;
            if (mainHead == null) {

                mainHead = n;
                this.head = mainHead;

            } else {
                var pre = mainHead, curr = mainHead;
                if (curr.next == null) {
                    if (n.data < curr.data) {
                        n.next = curr;
                        mainHead = n;
                        flag = false;
                    }
                }
                while (curr && flag) {
                    if (n.data > curr.data) {
                        pre.next = n;
                        n.next = curr;
                        flag = false;
                    }
                    pre = curr;
                    curr = curr.next;
                }
                if (flag) {
                    pre.next = n;
                }
            }

            main = main.next;

        }
        return this.head = mainHead;
    } */

    show() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data + " ";
            if (curr.next != null) {
                str = str + "  ";
            }
            curr = curr.next;
        }
        console.log(str);
        return str;



    }
    getData() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data;
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        return str;
    }



}

module.exports = {
    LinkedList
}
