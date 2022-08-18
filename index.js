
const i = 15.678;
const b = 123.965;
const c = 90.2345;


console.log ("1.", i); console.log ("2.", b); console.log ("3.", c);


console.log("4.Max=", Math.max(i, b, c));
console.log("5.Min=", Math.min(i, b, c));


let sum = (i + b + c);
console.log("6.Sum=", sum);


console.log("7.", Math.floor(i) ,"7.", Math.floor(b) , "7.", Math.floor(c));


let sumaFloor = Math.floor(i) + Math.floor(b) + Math.floor(c);
console.log(sumaFloor);


let  sumaRound = Math.round(sumaFloor / 100) * 100;
console.log(sumaRound);


console.log(sumaRound % 2 === 0) 


let restMoney = ( 500 - sum);
console.log(restMoney);


let mediumCount = (i + b + c) / 3;
console.log(mediumCount.toFixed(2))


const MIN_VALUE = 1;
const MAX_VALUE = 100;
let randomSale = (MAX_VALUE - MIN_VALUE) * Math.random() + MIN_VALUE;
console.log(randomSale.toFixed(0));


let resultBuy = (1 - (randomSale / 100)) * sum;
console.log(resultBuy.toFixed(2));


let lastChanse = (sum / 2) - (randomSale / 100 * sum);
console.log(lastChanse);

 

