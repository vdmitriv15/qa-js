// 3. Работа с массивом
// У вас есть массив:
//     arr = [ "a,b,c", "d", "e" ];
// Сделайте так, чтобы итоговый вывод был следующим:
// ["a", "b", "c", "d", "e"]

let arr = [ "a,b,c", "d", "e" ];
let arr1 = arr.shift().split(',');
console.log(arr1.concat(arr))
