import { Storage } from "./Storage";
import products from "./../data/products.json";

type TCost = "убывание" | 'возрастание';

export interface ProductsModel {
    product_name: string;
    company_name: string;
    quantity: number;
    unit_cost: number;
    delivery_id: number;
    warehouse_id: number;
}

export class Products extends Storage {
    constructor(){
        super();
        products.forEach((item) => {
            this.setProduct(item.warehouse_id, item)
        })
    }

    addNewProduct(product: ProductsModel): string{
        products.push(product);
        return `Товар ${product.product_name} добвлен в корзину`
    }

    sortProductsByPrice(products: ProductsModel[], cost: TCost): ProductsModel[] {
        return products.sort((a, b) => {
            if(cost === 'возрастание'){
                return a.unit_cost - b.unit_cost;
            }else{
                return b.unit_cost - a.unit_cost;
            }
        })
    }
    
}