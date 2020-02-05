//数据结构1：数组——创建、初始化、访问
//初始化：var arrName = []; []内可赋值
//arrName.length可以获取数组的长度（即数组元素个数），注意，若数组元素有被人工赋值为undefined的，也算在长度内
//访问特定位置直接采用data[index]写下标
//遍历输出用for循环

//创建&初始化数组
var daysOfWeek = []; //初始化空数组
console.log(daysOfWeek);
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; //初始化并给数组元素赋初值
console.log(weekDays); //可以一次性输出整个数组，以"[data0, data1, data2, ...]"的格式显示

//获取数组长度（了解数组中已经存放多少个元素），使用length属性
/*var arrayLength;
arrayLength = daysOfWeek.length;
console.log(arrayLength);
arrayLength = weekDays.length;
console.log(arrayLength);
console.log(daysOfWeek.length);
console.log(weekDays.length);*/

//访问数组特定位置元素
console.log("下标位置3的元素为" + weekDays[3]); //输出下标位置3（第4个，毕竟从0开始计数）的元素值
//从第一个元素开始，输出所有元素（遍历数组并输出）
for (let index = 0; index < weekDays.length; index++) { //这个length用起来真方便
    console.log(weekDays[index]);
}