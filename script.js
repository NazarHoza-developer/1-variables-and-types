
const pants = 15.678;
const jacket = 123.965;
const suit = 90.2345;


console.log ("1.", pants); console.log ("2.", jacket); console.log ("3.", suit);


console.log("4.Max=", Math.max(pants, jacket, suit));
console.log("5.Min=", Math.min(pants, jacket, suit));


let sum = (pants + jacket + suit);
console.log("6.Sum=", sum);


console.log("7.", Math.floor(pants) ,"7.", Math.floor(jacket) , "7.", Math.floor(suit));


let sumaFloor = Math.floor(pants) + Math.floor(jacket) + Math.floor(suit);
console.log(sumaFloor);


let  sumaRound = Math.round(sumaFloor / 100) * 100;
console.log(sumaRound);


console.log(sumaRound % 2 === 0) 


let restMoney = ( 500 - sum);
console.log(restMoney);


let mediumCount = (pants + jacket + suit) / 3;
console.log(mediumCount.toFixed(2))


const MIN_VALUE = 1;
const MAX_VALUE = 100;
let randomSale = (MAX_VALUE - MIN_VALUE) * Math.random() + MIN_VALUE;
console.log(randomSale.toFixed(0));


let resultBuy = (1 - (randomSale / 100)) * sum;
console.log(resultBuy.toFixed(2));


let lastChanse = (sum / 2) - (randomSale / 100 * sum);
console.log(lastChanse);

 

