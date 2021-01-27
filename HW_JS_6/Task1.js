// 1. Объединение массива
// Напишите 3 функции, которые объединять массив в строку.
//     Сам массив: cars = ["Audi", "Volvo", "BMW", "Mercedes"];
// Результат:
//     "Audi, Volvo, BMW, Mercedes"
// "Audi,Volvo,BMW,Mercedes"
// "Audi Volvo BMW Mercedes"

const cars = ["Audi", "Volvo", "BMW", "Mercedes"];

console.log(cars.join(', '));
console.log(cars.join(','));
console.log(cars.join(' '));
