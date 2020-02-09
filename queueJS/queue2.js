//应用：循环队列击鼓传花

function Queue() {
    let items = [];
    this.enqueue = function (element) {
        items.push(element);
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
    this.print = function () {
        console.log(items.toString());
    };
}

function circleQueue(nameList, num) {

    let queue = new Queue();

    for (let i = 0; i < nameList.length; i++) {     //将所有元素加入队列
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {             //循环队列
            queue.enqueue(queue.dequeue());            
        }
        eliminated = queue.dequeue();
        console.log(eliminated + "is eliminated in the game.");
    }
    
    return queue.dequeue();
}

//测试
let names = ["John", "Sam", "Neo", "Jack", "Brown"];
let winner = circleQueue(names, 7);
console.log("The winner is" + winner);