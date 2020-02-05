//数据结构1：数组——添加，插入，删除
/*----------------------*/
//末位添加用array.push();
//末位删除用array.pop();
//push()入栈，pop()出栈，模拟stack栈
/*----------------------*/
//首位插入用array.unshift(data);
//首位删除用array.shift();
//unshift(data)入队，shift()出队，模拟queue队列
/*----------------------*/
//array.splice(index, numbers, data1, data2, ...)在任意位置更换元素，index表示待修改元素的下标索引，numbers表示该索引开始向后numbers个元素进行“删除”操作，datas则表明从该索引位置开始添加的元素值；numbers和datas共同实现数组元素替换操作

//Part1：数组的元素插入
//在数组的末尾添加元素
var numbers = [0,1,2];      //长度为3，numbers[3]为undefined
console.log("初始化数组为", numbers);       //添加元素前做一个输出测试
console.log("numbers[3]为undefined，如此处", numbers[numbers.length]);   //做一个测试，验证上一行的注释
numbers[numbers.length] = 3;//给数组末尾（之前为undefined）添加元素并赋值，并让数组长度+1
console.log("末位添加之后", numbers);       //添加元素后做一个输出测试，可见添加成功
//push()方法也可以在末尾添加元素
numbers.push(4);            //向末尾添加1个元素
console.log("push()一个元素后", numbers);   //添加元素后做一个输出测试，可见添加成功
numbers.push(5,6);          //向末尾添加多个元素，按照输入顺序依次添加
console.log("push()两个元素后", numbers);   //添加元素后做一个输出测试，可见添加成功
//-------------------------------------------------------------------//
//插入元素到数组首位
//需要将所有现有元素向右移动一位
//可以循环遍历数组元素，从"最后一位+1"（也就是数组长度那一位）的地方开始，将对应的前一个元素赋值，最后再把需要赋值的值放给第一个位置上
var insertElem = 100;
for (let index = numbers.length; index >= 0; index--) { //此处，index的判断，如果>0，则data[0]维持不变；如果>=0，则data[0]为undefined
    numbers[index] = numbers[index - 1];    
}
console.log("遍历法后移所有元素后", numbers);
numbers[0] = insertElem;
console.log("随后更新首个元素：", numbers);
//unshift(data)方法则可以更快捷地在首位添加元素
numbers.unshift(101, 102);  //可以添加多个元素，按照元素顺序添加
console.log("unshift()两个元素后", numbers);    //可以发现[0]位为101，[1]位为102

/*---------------------------------------------*/

//Part2：数组的元素删除
//pop()方法可以进行末位删除
numbers.pop();
console.log("pop()一个元素后", numbers);    //可以发现末位(numbers[numbers.length - 1])的元素6没了
//------------------------------------------------------//
//删除数组首位的元素
//如果是C，我们的做法是遍历数组，直接将后面一位的值赋值给前面一位，不过JS里这样操作，数组长度不变，最后一位元素为undefined
console.log("遍历法删除首个元素前查看数组长度", numbers.length); 
for (let index = 0; index < numbers.length; index++) {
    numbers[index] = numbers[index + 1];
}
console.log("遍历法删除首个元素后", numbers);   //做个测试，首位元素101没了，然而很明显发现最后一位成了undefined
console.log("遍历法删除首个元素后查看数组长度", numbers.length, "可见长度没变");    //长度也没变
//shift()方法则是真正删除数组的第一个元素
numbers.shift();
console.log("shift()一个元素后", numbers);  //做测试，首位元素102没了，元素个数也-1
numbers.pop();                  //好吧容我再把最后那个undefined给消除掉
console.log("去掉undefined元素后", numbers);
//push()与pop()可以用来模拟stack栈的“入栈”和“出栈”操作；
//shift()与unshift()可以用来模拟queue队列的“入队”和“出队”操作；

/*---------------------------------------------*/

//在任意位置添加或删除元素
//splice(start: number, deleteCount?: number)方法实现此功能，第一个参数指定下标位置（索引），第二个参数指定删除个数，后续参数则表示删除后再插入的元素内容
numbers.splice(3,2);        //下标位置3的地方起删除2个元素，即numbers[3],numbers[4]被删除
console.log("splice(3,2)后", numbers);       //验证
numbers.splice(2,1,101,102);    //下标位置2的地方起删除1个元素并随后添加2个新元素，值为101，102；即删除numbers[2]，并插入101到numbers[2]，102到numbers[3]，其他后移
console.log("splice(2,1,101,102)", numbers);    //验证