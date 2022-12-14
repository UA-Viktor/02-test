// Цикл For

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }


// Задача 1

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );
//     console.log(`ЗП работника номер ${i} - ${salary}`);
//     totalSalary += salary;
// }

// console.log('totalSalary: ' + totalSalary);

// Задача 2

const min = 0;
const max = 5;
let total = 0;

// Вариант 1
// for (let i = min; i <= max; i += 1){
//     console.log(i);
//     if (i % 2 === 0) {
//         total += i;
//     }
// }

// console.log('Total ', total);


// Вариант 2
for (let i = min; i <= max; i += 1){
    if (i % 2 !== 0) {
        console.log('Не четное: ' + i);
        continue;
    }
    console.log('Четное: ', i);
    total += i;
}

console.log('Total ', total);