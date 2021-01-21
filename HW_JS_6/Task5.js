// 5. Создайте массив и выведите в консоль минимальный и максимальный элементы в этом массиве.
//     Массив данных:
//     var arr = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);

function min_and_max(arr){
    arr.sort((a, b) => a - b);
    let minEl = arr[0];
    let maxEl = arr[arr.length-1];
    return 'Max= ' + maxEl+ ' ' + 'Min= ' + minEl
}
let myArr = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);
console.log(min_and_max(myArr))
