//应用：最小优先队列
/*
如排号，VIP1>VIP2>VIP3>普通号
实现优先队列：
方式：设置优先级，然后在正确的位置添加元素，按照顺序移除元素

选项2：用入列操作添加元素，但是按照优先级移除元素
 */

function PriorityQueue() {  //主要方法差别在入列和输出上
    let items = [];
    function QueueElement(element, priority) {         //两个参数：队列中的元素、元素的优先级
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;                                      //表示该元素尚未添加
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {    //比较待添加元素与已有的位置i的元素的优先级，看该元素优先级是否更高
                items.splice(i, 0, queueElement);               //若该元素优先级更高（数字更小————VIP1肯定大于VIP3，就像银行取号），插到位置i之前
                added = true;                                   //添加标记变为true表明已根据优先级添加
                break;                                          //然后立即停止循环遍历（不然这个元素会在每个优先级比他低的元素之前都加入）
            }
        }
        if (!added) {                                           //若上述遍历无结果，则说明该元素没有特殊优先级，则直接添加至队尾
            items.push(queueElement);
        }
    };
    this.print = function() {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);  //字符字面量格式输出“元素信息-优先级信息”
        }
    };
    this.dequeue = function () {
        return items.shift();
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return (items.length == 0);
    };
    this.size = function () {
        return items.length;
    };
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.enqueue("White", 3);
priorityQueue.enqueue("Brown", 3);
priorityQueue.enqueue("Sam", 2);
priorityQueue.print();