//关于了解遍历数组的方法，有一个经典得例子：斐波那契数列

var fibonacci = []; //初始化数组
fibonacci[0] = 1;   //头俩值
fibonacci[1] =1;

for (let index = 2; index < 5; index++) {  //求前5个斐波那契数列
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}
console.log(fibonacci); //可以直接输出整个数组

for (let i = 0; i < fibonacci.length; i++) {    //也可以将数组元素逐个输出
    console.log(fibonacci[i]);    
}