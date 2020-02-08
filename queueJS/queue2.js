//应用：循环队列击鼓传花

function Queue() {
    let items= [];
    this.enqueue = function (element) {
        items.push(element);
    };
    
}