//JS数组常用方法汇总
//合并数组array1.concat(data1, data2, ...) 按照datas的顺序将变量、数组合并起来，续在array1后
var zero = 0;
var positiveNumbers = [1,2,3,];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero,positiveNumbers);
console.log(numbers);

//迭代器函数（喵喵喵？），看书上介绍，包括every, some, forEach, map, filter, reduce, 好像都是帮助遍历数组的方法

//例：一个0~6的整型的数组，写一个判断偶数的函数（偶数返回true，奇数返回false）
var isEven = function (x) {
    console.log(x);
    return (x % 2 == 0) ? true : false;    //if (x%2==0) true; else false;
};          //isEven先输出一个数字（告诉你正在判断哪个数字）然后进行判断并返回结果true或者false（注意！这里只是返回结果，可没说输出）
var numbers = [1,2,3,4,5,6];
console.log("让我们建立这么一个数组：", numbers);

//every(), 迭代数组中的每一个元素直到返回false
numbers.every(isEven);  //输出结果为1，因为对于1，isEven值为false，因此到1的时候就直接停止掉every进行的迭代；告诉你1经过isEven判断后结果是false，它前面的元素（如有）都是true
console.log("该元素调用every后的结果为", numbers.every(isEven)); //先给你执行isEven输出，然后告诉你返回值false
console.log(numbers);   //别笑我，我只是用这个当分割线

//some()，迭代数组中的每个元素，直到函数返回true
numbers.some(isEven);   //是的，这里2才结束，告诉你2经过isEven判断后结果是true，它前面的元素（如有）都是false
console.log("该元素调用some后的结果为", numbers.some(isEven));  //先给你执行isEven输出，然后告诉你返回值true
console.log(numbers);   //是的，这又是一个分割线

//forEach()，这个就是彻底全遍历了，用于迭代整个数组，()内第一个参数是“每一个元素都准备调用的那个函数”
numbers.forEach(function (x) {
    console.log((x% 2 == 0));   //每一个参数都要调用这个判断函数，输出值为true或者false
});
//仔细理解一下函数名：forEach(function)——对于每一个元素都执行括号内的function并判断结果；咱们这个function就是判断对（true）和错（false）的，所以返回的也是bool
console.log(numbers);   //是的，这还是一个分割线

/*-------------------------*/
//接下来三个函数map(), filter(), reduce()可以帮助学习函数式编程（尼玛好远……）
/*-------------------------*/
//map()，这个方法会返回一个新数组，新数组元素为原始数组元素调用函数处理之后的值
var myMap = numbers.map(isEven);
console.log(myMap); //把isEven调用结果保存在新数组里; myMap[0] == false, 因为numbers[1] == 1，不是偶数；它的判断顺序完全依照原始数组来的

//filter()，返回的新数组是由判断结果为true的元素组成的
var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);   //结果就是2,4,6

//reduce()，这个方法接受一个函数作为参数，该函数需要有四个参数：previousValue、currentValue、index、array；返回一个将被叠加到累加器的值，reduce停止执行后会返回这个累加器。适合对一个数组中所有元素求和
var reduceTest = numbers.reduce(function (previous, current, index) {
    return previous + current;
});
console.log(reduceTest);    //似乎等于遍历数组sum += data[i]
//wdnmd，对不起这个玩意我放弃了……
//reduce的初始语法为：
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue);