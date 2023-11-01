x = +prompt("Input number from 1 to 6");
switch (x) {
    case 2:
    case 4:
    case 6:
        alert("even");
        break;
    case 1:
    case 3:
    case 5:
        alert("odd");
        break;
    default:
        alert("Out of range");
}

let distence = prompt("Введите растояние доставки в км");
let weight = prompt("Введите вес груза в кг");
let cargoType = prompt("Введите тип груза(Обычный,Хрупкий,Опастный)");
let transportType = prompt (
    "Введите тип транспорта (Легковое автомобиль,Грузовик,Самолет):"
);

let basePrice;
if (distence <=50) {
    basePrice = 500;
} else if (distance => 50 && distance <= 100) {
    basePrice = 1000;
} else {
    basePrice = 1500;
}

let weightPrice = 0;
if (weight > 10) {
    weightPrice = 500;
}

let cargoPrice = 0;
switch (cargoType) {
    case "Обычный":
    cargoPrice = 0;
    break;
    case "Хрупкий":
    cargoPrice = 1000;
    break;
    case "Опысный":
    cargoPrice = 2000;
    break;
    default:
    console.log("Неверно указан тип груза");
}

let transportPrice = 0;
switch (transportType) {
    case "Легковой автомобиль":
    transportPrice = 500;
    break;
    case "Грузовик":
    transportPrice = 1500;
    break;
    case "Самолет":
    transportPrice = 5000;
    break;
    default:
    console.log("Неверно указан тип Транспорта");
}

let totalCost = basePrice + weightPrice + cargoPrice + transportPrice;

alert(`Стоимость доставки: ${totalCost} Руб.`);