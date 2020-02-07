/*
1.十进制到二进制的转换：
    十进制到二进制的转换方式，以数字10D（1010B）为例
    10/2=5...0; <1>
    5/2=2...1;  <2>
    2/2=1...0;  <3>
    1/2=0...1;  <4>
    1234算式求余数结果依次入栈，然后4321出栈得1010
    <del>停止入栈的条件：结果是0...0或0...1</del>
    停止出栈条件：栈为空
*/
//创建一个函数来模拟栈（参考前文）
function simStack() {
    let stkElm = [];
    this.push = function(element) {
        stkElm.push(element);
    };
    this.pop = function() {
        return stkElm.pop();
    };
    this.peek = function() {
        return stkElm[stkElm.length - 1];
    };
    this.isEmpty = function() {
        return (stkElm.length == 0);
    };
    this.clear = function() {
        stkElm = [];
    };
    this.size = function() {
        return stkElm.length;
    };
    this.print = function() {
        return stkElm.toString();
    };
}

//书中代码实现
/* 
function dec2Bin(decNum) {
    var retNumStk = new simStack(),
        rem,
        binaryString = " ";
    while (decNum > 0) {
        rem = decNum % 2;
        retNumStk.push(rem);
        decNum = Math.floor(decNum / 2); //如果是C，这里就不用floor了，但是JS会自动转换浮点数，所以要调用floor返回“不大于结果的最大整数”
    }
    while (!retNumStk.isEmpty()) {
        binaryString += retNumStk.pop().toString();
    }
    return binaryString;
}

//测试
console.log(dec2Bin(233)); 
 */

//2.平衡圆括号
//有待完成
/*大致思路：
遍历字符串
    如果字符串遇到左括号则入栈
    遇到右括号则出栈
    如果没有多余右括号且栈为空则平衡匹配
    否则不平衡
*/

//3.汉诺塔Hanoi
//有待完成
/*大致思路：
L, M, R, 每根柱子是一个栈
一个栈弹出元素到另一个栈(例：R.push(L.pop())是把L弹出的元素入到R中)同时计数器+1
入栈之前要判断，栈顶元素大于待入栈元素才可以入栈(if(R.peek) > (L.pop) then push)
最后确保R元素顺序排列且L中所有元素均在R内
 */
/* var leftCol = new simStack();
var midCol = new simStack();
var rightCol = new simStack(); */