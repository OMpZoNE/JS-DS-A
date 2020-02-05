//栈的使用

function Stack() {
    let items = [];
    /*添加如下方法:
    push(element(s));   添加若干个新元素到栈顶
    pop();              移除栈顶的一个元素，同时返回被移除元素
    peek();             返回栈顶的元素，但不对栈做任何修改
    isEmpty();          检查栈内是否为空，为空返回true，否则返回false
    clear();            移除栈内所有元素
    size();             返回栈内元素个数，就像数组的length似的*/

    this.push = function(element) {
        items.push(element);
    };
    this.pop = function() {
        return items.pop();
    };
    this.peek = function() {
        return items[items.length - 1];
    };
    this.isEmpty = function() {
        return (items.length == 0) ? true : false;
    };
    this.size = function() {
        return items.length;
    };
    this.clear = function() {
        items = [];
    };
    this.print = function() {
        console.log(items.toString());
    };
}

//1.初始化Stack类并验证是否为空
let stack = new Stack();
console.log(stack.isEmpty());
//2.添加元素入栈
stack.push(5);
stack.push(8);
//3.查看栈顶
console.log(stack.peek()); //查看栈顶元素并输出
//4.再添加一个元素
stack.push(11);
console.log(stack.peek()); //栈顶为11
console.log(stack.size()); //栈内元素个数为3
console.log(stack.isEmpty()); //栈不为空，输出false
//5.再添加一个元素
stack.push(15);
//6.移除两个元素
stack.pop();
stack.pop();
console.log(stack.size()); //现在栈内元素个数为2（元素分别是5，8）
stack.print();