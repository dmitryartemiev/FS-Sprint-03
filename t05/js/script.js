"use strict";

let guestList = new WeakMap();
guestList
  .set({ name: "Dimon" }, "invited")
  .set({ name: "Max" }, "invited")
  .set({ name: "Jhon" }, "invited")
  .set({ name: "Altynbek" }, "invited")
  .set({ name: "Geralt" }, "invited");

//set
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


let bankVault = {};

//weakset

let coin = 1
let coinCollection = new WeakSet{

};
