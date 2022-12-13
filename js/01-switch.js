// Switch 1 - Основной

// const stars = 4;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого кол-ва звезд нет');
//         break;
// }

// console.log(price);



// Switch 2 - Объединение

// const stars = 4;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
    
//     case 3:
//     case 4:
//         price = 50;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого кол-ва звезд нет');
//         break;
// }

// console.log(price);



// Задача

const option = 1;
let message = '';

switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра';
        break;

    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;

    default:
        message = 'Вам перезвонит менеджер';
        break;
}

console.log(message);