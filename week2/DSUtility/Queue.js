class Queue {
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.items = [];
        this.Size=0;
    }

    MyQueue(capacity) {
        this.capacity = capacity;
        var items = new items(capacity);
    }
   enque(ele)
   {
       if(this.rear==this.capacity-1)
       {
           console.log("Queue is full");
           return;
       }
       if(this.front==-1)
       {
           this.front++;
           
           
          // return true;
       }
       this.items[++this.rear]=ele;
       this.Size++;
       
   }
   deque()
   {
       if(this.front==-1)
       {
           console.log("Queue is empty");
           return null;
       }
      var  ele=this.items[this.front++];
      this.Size--;
       if(this.front>this.rear)
       {
           this.front=this.rear=-1;
       }
       return ele;
   }
   show()
   {
       var res="";
       for( var i=this.front;i<=this.rear;i++)
       {
           var res=res+this.items[i];
           if(i<this.rear)
           {
               res=res+",";
           }
           
       }
       return res;
       
   }
   isEmpty()
   {
       if(this.Size>0)
       {
           return true;
       }
       return false; 
   }
   
   displayAnagram(){
    if(this.head==null){
        console.log("No element present ");
        return;
    }
    console.log(" The numbers which are Prime and anagram ");
    var pre=this.head;
    var curr=pre.next;
    var dis=require('util');

    while(curr){
           dis.print(pre.element);
        if(pre.next!=null){
            dis.print("  ")
        }
        dis.print(curr.element);
        dis.print(',');
        pre=curr;
        curr=curr.next;
    }

}

} 

module.exports={
    Queue
}
// var que=new Queue();
//  que.enque(10);
// que.enque(20);


// console.log(que.deque());