//数据结构2：stack栈    创建、初始化
//特点：后进先出LIFO，有栈底（旧元素）和栈顶（新元素）

//创建&初始化栈：
//1.声明一个栈stack类
function Stack() {
    //属性声明，方法声明
    //0.通过数组保存栈内元素
    let items = [];
    /*添加如下方法:
    push(element(s));   添加若干个新元素到栈顶
    pop();              移除栈顶的一个元素，同时返回被移除元素
    peek();             返回栈顶的元素，但不对栈做任何修改
    isEmpty();          检查栈内是否为空，为空返回true，否则返回false
    clear();            移除栈内所有元素
    size();             返回栈内元素个数，就像数组的length似的*/

    //push 元素入栈操作，将element元素加入栈，利用数组push()来进行；须记住，push()本身会将元素加入栈顶（数组末尾）并改变数组长度，返回值为当前数组长度
    this.push = function(element) {
        items.push(element);
    };
    //pop 元素出栈操作，移除栈顶的元素并返回该元素，此举会令数组元素-1
    this.pop = function() {
        return items.pop();
    };
    //peek 查看栈顶元素（只返回栈顶元素） 因为栈是用数组保存元素的，所以直接返回数组最后一个元素即可，其索引位置为长度-1
    this.peek = function() {
        return items[items.length - 1];
    };
    //isEmpty 检查栈是否为空
    this.isEmpty = function() {
        return (items.length == 0) ? true : false;
    };
    //size() 返回栈的元素个数，其实直接就返回数组元素个数即可
    this.size = function() {
        return items.length;
    };
    //其实我将来应该试试能不能把isEmpty与size关联，即(size返回值为0则isEmpty为1)
    //clear 清空栈内元素，直接设置为空数组即可
    this.clear = function() {
        items = [];
    };
    //也可以多次调用pop方法。这时候我觉得应该再加一个count计数，测试length是否为0，是的话停止pop
    //print 输出栈内元素到控制台
    this.print = function() {
        console.log(items.toString());
    };
}