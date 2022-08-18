
const pants = 15.678;
const jacket = 123.965;
const suit = 90.2345;


document.writeln (`Максимальна ціна: <b> ${Math.max(pants, jacket, suit)}; </b>  <br>`);
document.writeln(`Мінімальна ціна: <b>${Math.min(pants, jacket, suit)}; </b> <br>`);

let sum = (pants + jacket + suit);
document.writeln(`Вартість всіх товарів: <b>${sum}; </b> <br>`);

console.log("7.", Math.floor(pants) ,"7.", Math.floor(jacket) , "7.", Math.floor(suit));

let sumaFloor = Math.floor(pants) + Math.floor(jacket) + Math.floor(suit);
document.writeln(`Вартість всіх товарів без копійок: <b>${sumaFloor}; </b> <br>`);

let  sumaRound = Math.round(sumaFloor / 100) * 100;
document.writeln(`Вартість всіх товарів  до сотень: <b>${sumaRound}; </b> <br>`);

document.writeln(`Вартість всіх товарів парне число: <b>${sumaRound % 2 === 0}; </b> <br>`);

let restMoney = ( 500 - sum);
document.writeln(`Решта: <b>${restMoney}; </b> <br>`);

let mediumCount = (pants + jacket + suit) / 3;
document.writeln(`Середнє значення: <b>${ mediumCount.toFixed(2)}; </b> <br>`);

const MIN_VALUE = 1;
const MAX_VALUE = 100;
let randomSale = (MAX_VALUE - MIN_VALUE) * Math.random() + MIN_VALUE;
document.writeln(`Рандомна знижка: <b>${randomSale.toFixed(0)}%; </b> <br>`);

let resultBuy = (1 - (randomSale / 100)) * sum;
document.writeln(`Сума до оплати: <b>${resultBuy.toFixed(2)}; </b> <br>`);

let lastChanse = (sum / 2) - (randomSale / 100 * sum);
    document.writeln(`Чистий прибуток: <b>${lastChanse}; </b> <br>`);

 

