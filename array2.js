//二位与多维数组（矩阵）

//创建方式一：数组套数组
var avrTemp = [];
avrTemp[0] = [26,24,23];
avrTemp[1] = [28,27,25];
console.log(avrTemp);
//创建方式二：[][]更类似于C的方法
avrTemp[0] = [];
avrTemp[0][0] = 26;
avrTemp[0][1] = 24;
avrTemp[0][2] = 23;
avrTemp[1] = [];
avrTemp[1][0] = 28;
avrTemp[1][1] = 27;
avrTemp[1][2] = 25;
console.log(avrTemp);
//查看输出：迭代二维数组元素
function printMatrix(myMatrix) {    //双重循环遍历，这个套路应该C里玩过无数次了
    for (let i = 0; i < myMatrix.length; i++) { //i从0开始，直到列数遍历完成
        for (let j = 0; j < myMatrix[i].length; j++) {  //j从0开始，遍历该列所有行元素，因此需要比较的是myMatrix[i].length
            console.log(myMatrix[i][j]);             
        }        
    }
}
printMatrix(avrTemp);   //JS，调用二维数组输出函数来查看