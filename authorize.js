"use strict";
function authorize(username, password) {
  if (typeof username !== "string" || username === "") {
    return "Ошибка: имя пользователя должно быть непустой строкой.";
  }
  if (typeof password !== "string" || password.length < 6) {
    return "Ошибка: пароль должен быть строкой длиной от 6 символов.";
  }
  if (username === "admin" && password === "123456") {
    return "Успешная авторизация.";
  } else {
    ("Ошибка авторизации: неверные имя или пароль.");
  }
}
