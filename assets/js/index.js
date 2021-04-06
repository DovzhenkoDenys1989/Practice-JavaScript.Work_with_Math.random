"use strict";

let arr = new Array();
for ( let i = 0; i < 10; i++ ) {
  arr[i] = Math.round((Math.random() * 100) + 100);
}
console.log(arr)



/*let amount = new Array();
function User (amount, ...args){
  for ( let i = 0; i < amount; i++ ){
    amount[i];
  }
this.email =`user ${i}@gmail.com`;

this.age = Math.round((Math.random() * 12) + 38);

this.isMale = Boolean(Math.round(Math.random()));
return 
}*/


function User (amount){
let array = []; // Пустой объект

for (let i = 1; i <= amount; i++) {
  let email = `user ${i}@gmail.com`;
  let age = Math.round((Math.random() * 12) + 38);
  let isMale = Boolean(Math.round(Math.random()));
  let users = { user: email[0], age:[1], isMale:[2] };

  array.push(users);
  console.log(array)

}

}

