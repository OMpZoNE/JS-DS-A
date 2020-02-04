//排序与搜索，算法方面的东西

//Part1：排序：
//reverse()，逆序
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(numbers);
numbers.reverse(); //进行reverse之后，12，11，10…3，2，1，注意此时数组已经改变
console.log(numbers);

//sort()，转换成字符串
//compareFunction，请自行书写这种自定义排序函数，使用array.sort(compareFunction)按照函数规则排序
let friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson)); //会发现这个数组按照age从小到大排序

/*-------------------------*/

//Part2：搜索
//indexOf 从前往后数，第一个与参数匹配的元素的索引
//lastIndexOf 从后往前数，第一个与参数匹配的元素的索引
console.log(numbers); //首先让我们看一下numbers数组
numbers.splice(2, 0, 9); //在下标2处增加一个元素9
; //现在numbers里有两个9，分别是numbers[2]与numbers[4]
console.log(numbers.indexOf(9)); //numbers[2] == 9，从前往后数
console.log(numbers.indexOf(90)); //因为numbers数组里没有90，所以返回-1
console.log(numbers.lastIndexOf(9)); //numbers[4] == 9，从后往前数
console.log(numbers.lastIndexOf(90)); //因为numbers数组里没有90，所以返回-1