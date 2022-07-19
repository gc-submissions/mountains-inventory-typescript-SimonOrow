import InventoryItem from "../models/InventoryItem";
import Product from "../models/Product";

let inventoryItem1: InventoryItem = {
  product: { name: "motor", price: 10.0 },
  quantity: 10,
};
let inventoryItem2: InventoryItem = {
  product: { name: "sensor", price: 12.5 },
  quantity: 4,
};
let inventoryItem3: InventoryItem = {
  product: { name: "LED", price: 1.0 },
  quantity: 20,
};

const inventoryList: InventoryItem[] = [
  inventoryItem1,
  inventoryItem2,
  inventoryItem3,
];

const calcInventoryValue = (array: InventoryItem[]): InventoryItem | number => {
  let total: number = 0;
  array.forEach((item) => {
    total += item.product.price * item.quantity;
  }); //no need for return 0, if total is 0, will return 0. No need for if statement
  return total;
};
// console.log(calcInventoryValue([]));
