let myText = 'GEEAD';
alert(myText);

myText = 'hello, World!'
myText = 99;
myText = 4*10;
myText = true;
myText = undefined;
alert(myText);

const siteURl = 'https://www.google.com';
alert(siteURl);


const currentYear = '2023';
console.log(typeof currentYear); // string
const numberCurrentYear = Number(currentYear); // number
console.log(typeof numberCurrentYear);

const number1 = parseInt('16 volts', 10);
console.log(number1); // 16
// преобразуется шестнадцатеричное За; результат 58
const number2 = parseInt('3a', 16);
console.log(number2); // 58
// слово "kрh" игнорируется, parseFloat всегда подразумевает основание 10
const number3 = parseFloat('15.5 kph');
console.log(number3); //15.5