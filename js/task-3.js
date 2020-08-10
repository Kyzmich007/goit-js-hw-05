"use strict";
class Storage {
  constructor(arrey) {
    this.arrey = arrey;
  }
  getItems() {
    return this.arrey;
  }
  addItem(item) {
    return this.arrey.push(item);
  }
  removeItem(item) {
    return this.arrey.splice(this.arrey.indexOf(item), 1);
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.log(items);
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
