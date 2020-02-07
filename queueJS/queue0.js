//数据结构3：queue队列
//特点：先进先出FIFO，有队首和队尾

//创建&初始化队列：
function Queue() {
    let items = [];
    //声明属性方法
    /*
    enqueue(element(s))入队操作，向队列尾部添加若干个元素
    dequeue()出队操作，移除队首的元素并返回该元素
    front()返回队列的队首元素
    isEmpty()查看队列是否为空，为空返回true否则返回false
    size()查看队列长度
    */
    this.enqueue = function(element) {
        items.push(element);
    };
    this.dequeue = function() {
        return items.shift();
    };
    this.front = function() {
        return items[0];
    };
    this.isEmpty = function() {
        return (items.length == 0);
    };
    this.size = function() {
        return items.length;
    };
    this.print = function() {
        console.log(items.toString());
    };
}

//队列的使用
let queueTest = new Queue();
console.log(queueTest.isEmpty()); //true，现在队列为空
queueTest.enqueue("John");
queueTest.print();
queueTest.enqueue("Sam");
queueTest.enqueue("Brown");
queueTest.print();
queueTest.dequeue();
queueTest.print();