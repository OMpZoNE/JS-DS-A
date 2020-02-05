//toString与join，数组与字符串相关的方法
//toString()，将数组里所有元素输出为一个字符串
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers); //输出数组
console.log(numbers.toString()); //以字符串格式输出

//join()方法可以用来添加分隔符并以字符串形式输出
var numStr = numbers.join("->");
console.log(numbers);
console.log(numStr); //会发现这个字符串，每个元素中间由->相分隔