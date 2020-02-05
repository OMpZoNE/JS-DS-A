var numbers = [1, 2, 3, 4, 5, 6];

//箭头函数
numbers.forEach(x => { //使用箭头函数，功能仍旧是判断是否为偶数
    console.log(x % 2 == 0);
})
console.log(numbers); //分割线emmm

//for...of循环迭代
for (let currentNum of numbers) {
    console.log(currentNum, (currentNum % 2 == 0) ? "Even" : "Odd");
} //很简洁的写出来当前的数字，以及该数字是odd还是even
//wdnmd这个遍历方法真好用，还写啥let i = 0;i < arr.length;i++

//@@iterator迭代器
let myIterator = numbers[Symbol.iterator]();
console.log(myIterator.next().value); //1
console.log(myIterator.next().value); //2
console.log(myIterator.next().value); //3
console.log(myIterator.next().value); //4
console.log(myIterator.next().value); //5
console.log(myIterator.next().value); //6
console.log(myIterator.next().value); //undefined，因为这个位置没存值
//通过Symbol.iterator访问，然后调用迭代器的next方法，依次得到数组中的值，越界后的值为undefined

//entries，返回包含"键值对"的@@iterator
let aEntries = numbers.entries(); //获取键值对的迭代器
console.log(aEntries.next().value); //[0,1]
console.log(aEntries.next().value); //[1,2]
console.log(aEntries.next().value); //[2,3]
console.log(aEntries.next().value); //[3,4]
console.log(aEntries.next().value); //[4,5]
console.log(aEntries.next().value); //[5,6]
console.log(aEntries.next().value); //undefined，因为这个位置没存值
//entries方法返回一个数组的迭代对象，包含一个键值对（key, value）,类型是数组array
//或者写作[index, data]更明白一些——key是索引位置（下标），value是下标所对应的值
//查了下MDN，这玩意跟键值对数组关系密切，等搞到散列表的时候再深究吧

//keys，返回包含"数组索引"的@@iterator
let aKeys = numbers.keys();
console.log(aKeys.next()); //{value: 0, done: false }
console.log(aKeys.next()); //{value: 1, done: false }
console.log(aKeys.next()); //{value: 2, done: false }
console.log(aKeys.next()); //{value: 3, done: false }
console.log(aKeys.next()); //{value: 4, done: false }
console.log(aKeys.next()); //{value: 5, done: false }
console.log(aKeys.next()); //{value: undefined, done: true }
//keys返回数组的索引（索引值为value），如果索引位置没有值则返回value为undefined，done属性true的对象
//哦对，keys返回的都是对象……

//values，返回包含数组的"值"的@@iterator
let aValues = numbers.values();
console.log(aValues.next()); //{value: 1, done: false}
console.log(aValues.next()); //{value: 2, done: false}
console.log(aValues.next()); //{value: 3, done: false}
console.log(aValues.next()); //{value: 4, done: false}
console.log(aValues.next()); //{value: 5, done: false}
console.log(aValues.next()); //{value: 6, done: false}
console.log(aValues.next()); //{value: undefined, done: true}
//就提示一点，返回的也是对象……

//Array.from()，挺实用的，根据已有数组通过一定方法创建新数组
let numbers2 = Array.from(numbers); //复制了一个numbers，不用遍历全部数组依次赋值给每个元素了
console.log(numbers2);
let evens = Array.from(numbers, x => (x % 2 == 0));
console.log(evens); //创建新的数组，元素内部表示原始元素经过()内方法调用后的结果（感觉类似forEach）
//查了下MDN，from()处理的是arrayLike（伪数组？）类对象，forEach处理数组

//Array.of() 根据传入的参数创建一个新的数组
let numbersCopy = Array.of(...numbers); //利用展开操作符复制数组（把数组里的值都展开成为参数）
console.log(numbersCopy);
//查了下MDN，这个用来区分Array()方法的，或许将来创建数组要用这个方法？

//fill()方法，用静态值填充数组
numbersCopy.fill(0); //将所有位置的值全赋值为0
console.log(numbersCopy);
numbersCopy.fill(2, 5); //从下标位置为5的索引位置开始，所有值赋值为2
console.log(numbersCopy);
numbersCopy.fill(1, 2, 4); //从下标位置为3开始，到下标位置为4结束，所有值赋值为1
console.log(numbersCopy);

//copyWithin 复制数组中一系列元素，到同一数组制定的起始位置
let arrayForCopy = Array.of(11, 12, 13, 14, 15, 16); //先创建一个测试用的数组
console.log(arrayForCopy);
arrayForCopy.copyWithin(1, 3, 6) //替换下标位置2开始的元素；要用下标位置为3的元素开始复制，到下标位置为6的地方结束（但是下标位置6的元素不被复制）
console.log(arrayForCopy);
//copyWithin(target, start, end)， data[start], data[start + 1]，...，data[end - 1]，将上述元素依次序复制，并粘贴覆盖到data[target]开始的地方；超出长度的部分舍弃