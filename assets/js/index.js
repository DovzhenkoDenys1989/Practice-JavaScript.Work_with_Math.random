"use strict";

/*1. Ознакомиться с методом Math.random.
2. Заполнить массив из 10 элементов случайными целыми числами от 100 до 200.*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = new Array();
for (let i = 0; i < 10; i++) {
  // arr[i] = Math.round((Math.random() * 100) + 100);
  arr.push(getRandomIntInclusive(100, 200));
}
console.log(arr);

/*3. Создать функцию, которая принимает amout - количество создаваемых объектов,
создает указанное кол-во объектов пользователей с полями email, age, isMale.
Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
Поле isMale заполняется рандомно значениями true или false.*/

function User(email, age, isMale) {
  this.email = email;
  this.age = age;
  this.isMale = isMale;
}

function getRandomUsers(amount) {
  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    usersArray.push(
      new User(
        `user${i}@gmail.com`,
        //Math.round((Math.random() * 38) + 12),
        getRandomIntInclusive(12, 50),
        //Boolean(Math.round(Math.random())),
        Math.random() < 0.5,
      )
    );
  }
  return usersArray;
}
console.log(getRandomUsers(50));
