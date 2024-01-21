import products from "./src/data/products.json";
import storage from "./src/data/storage.json";
import { Products } from "./src/models/Products";

const productsStore = new Products();

console.log(productsStore.allStorage);


const newProduct = {
  product_name: "PlayStation 5",
  company_name: "Технодом",
  quantity: 55,
  unit_cost: 450,
  delivery_id: 3,
  warehouse_id: 2,
};

console.log(productsStore.addNewProduct(newProduct));
console.log(productsStore.sortProductsByPrice(products, "возрастание"));
console.log(productsStore.sortProductsByPrice(products, "убывание"));
