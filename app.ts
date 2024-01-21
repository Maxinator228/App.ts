import products from "./src/data/products.json";
import storage from "./src/data/storage.json";
import { Products } from "./src/models/Products";

const productsStore = new Products();

console.log(productsStore.allStorage);

console.log(productsStore.sortProductsByPrice(products, 'возрастание'));
console.log(productsStore.sortProductsByPrice(products, 'убывание'));