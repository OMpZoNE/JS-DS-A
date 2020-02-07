//应用：优先队列
/*
如登机，头等舱>商务舱>经济舱
实现优先队列：
方式：设置优先级，然后在正确的位置添加元素，按照顺序移除元素

选项2：用入列操作添加元素，但是按照优先级移除元素
 */

function Queue() {
    let items = [];
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

function PriorityQueue() {
    let items = [];

    function queueElement(elemenet, priority) {
        this.elemeent = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority) {
        let queueElement = new queueElement(element, priority);
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueElement);
        }
    };
    this.print = function() {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    };
}