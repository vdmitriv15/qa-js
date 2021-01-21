// 4. Создайте программу, которая будет находить второй самый маленький элемент в массиве.
//     Массив данных:
//     var arr = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);

function second_min(arr){
    arr.sort((a, b) => a - b);
    console.log(arr);
    return arr[1]
}
let myArr = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);
console.log(second_min(myArr))
