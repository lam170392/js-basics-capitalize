"use strict";

function checkRegistration(age) {
  if (typeof age === "number") {
    if (age < 18) return "Регистрация запрещена. Вам нет 18 лет.";
    if (age >= 18 && age <= 60) return "Регистрация успешна.";
    if (age > 60) return "Регистрация запрещена. Возраст выше допустимого.";
  } else {
    return "Ошибка: неверный тип данных";
  }
}
console.log(checkRegistration(17));
console.log(checkRegistration(25));
console.log(checkRegistration(65));
console.log(checkRegistration("abc"));
