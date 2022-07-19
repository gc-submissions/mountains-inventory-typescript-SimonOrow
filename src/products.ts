import Product from "../models/Product";

const products: Product[] = [
  {
    name: "Carrot Cake",
    price: 5.0,
  },
  {
    name: "Tiramisu",
    price: 6.0,
  },
  {
    name: "Chocolate Cake",
    price: 5.0,
  },
];

const calcAverageProductPrice = (array: Product[]) => {
  let total = 0;
  array.forEach((item) => (total += item.price));
  return total / array.length;
};
console.log(calcAverageProductPrice(products));
