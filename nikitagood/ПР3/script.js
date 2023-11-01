const name = "Григорий";
console.log ("Привет, " + name);
if (name.length>6) {
    console.log ("Ну и длиннющие же у вас имя!");
} else {
    console.log("Имя у вас не из длинных.");
}

let firstNumber = prompt ("Введите первое число:");
let secondNumber = prompt ("Введите второе число:");
const operator = prompt("Введите оператор:");

firstNumber = +firstNumber;
secondNumber = +secondNumber;
 
let result;

if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    result = firstNumber / secondNumber;
} else {
    alert("Некорректный  оператор");
}

if (result !== undefined) {
    alert(`Результат: ${result} `);
}
