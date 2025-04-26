"use strict";

const name = "Алексей";
const age = 33;
let strNumber = "42";
let balance = 1500;

console.log(`Привет, меня зовут ${name}, мне ${age} года.`);
console.log(` ${Number(strNumber) + 8}`);
console.log(`На счету: ${balance.toString()}`);

function conversion(input) {
  if (typeof input === "number") return "Это число";

  if (typeof input === "string") {
    // Проверяем, можно ли строку преобразовать в число
    if (!isNaN(Number(input))) {
      return "Это строка-число";
    } else {
      return "Это строка";
    }
  }

  return "Неизвестный тип";
}

console.log(isNaN(Number("22")));
