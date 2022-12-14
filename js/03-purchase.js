//  Задача 1

let balance = 10000;
const payment = 2000;

console.log(`Общая стоимость заказа ${payment} кредитов. 
Проверяем кол-во доступных средств на счету.`);

if (payment <= balance) {
    console.log('OK. Деньги сняты с баланса.');
    balance -= payment;
    console.log(`На счету осталось ${balance} кредитов.`);
} else {
    console.log(`На счету недостаточно средств для проведения операции!`);
}

console.log(`Операция завершина.`);