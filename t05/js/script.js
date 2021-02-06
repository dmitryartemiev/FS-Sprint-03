"use strict";
//weakmap
console.log("Start of weakmap");

let name1 = {name: 'Dimon'}
let name2 = {name: 'Max'}
let name3 = {name: 'Jhon'}
let name4 = {name: 'Altynbek'}
let name5 = {name: 'Geralt'}

let guestList = new WeakMap();
guestList
  .set(name1, "invited")
  .set(name2, "invited")
  .set(name3, "invited")
  .set(name4, "invited")
  .set(name5, "invited");

  console.log(guestList.has(name1));
  console.log(guestList.size); //undefined
  console.log(guestList.delete(name4)); //true
  // console.log(guestList.clear()); <--- doesn't work

console.log("End of map");

//set
console.log("Start of set");
let menu = new Set();

let dish1 = { name: "borsch", price: 100 };
let dish2 = { name: "pure", price: 150 };
let dish3 = { name: "vinegret", price: 130 };
let dish4 = { name: "cezar", price: 160 };
let dish5 = { name: "olvie", price: 160 };

menu
  .add(dish1) //1
  .add(dish2) //2
  .add(dish1) //3
  .add(dish2) //4
  .add(dish3) //5
  .add(dish4) //6
  .add(dish5); //7

console.log(menu.size); // only 5 unique (contains a list of unique dishes and their prices)
menu.forEach((dish) => {
  console.log(dish.name + " - " + dish.price + " deneg");
}); // you can ask to name every available dish and its price, one after the other
console.log("End of set");
console.log("Start of weakmap");
//weakmap

let vault1 = { id: 1 };
let vault2 = { id: 2 };
let vault3 = { id: 3 };
let vault4 = { id: 4 };
let vault5 = { id: 5 };

let bankVault = new WeakMap([
  [vault1, { owner: "dimon" }],
  [vault2, { owner: "altynbek" }],
  [vault3, { owner: "john" }],
  [vault4, { owner: "sanya" }],
  [vault5, { owner: "magomed" }],
]);
console.log(bankVault.get(vault1));
console.log(bankVault.get(vault2));
console.log(bankVault.get(vault3));
console.log(bankVault.get(vault4));
console.log(bankVault.get(vault5));
//the only way to see the contents of a box, is to provide its correct credentials

console.log("End of weakmap");
console.log("Start of weakset");
//weakset

let coin1 = { value: 1 };
let coin2 = { value: 2 };
let coin3 = { value: 3 };
let coin4 = { value: "bitcoin" };
let coin5 = { value: 4 };

let coinCollection = new WeakSet();

coinCollection
  .add(coin1)
  .add(coin2)
  .add(coin3)
  .add(coin3)
  .add(coin5)
  .add(coin4);
console.log(coinCollection); //all unuque, can see entire collection

console.log("End of weakset");
