import storage from "../data/storage.json";
import { ProductsModel } from "./Products";

interface StorageModel {
    city: string;
    name: string;
    address: string;
    id: number;
    products: ProductsModel[];
}

export class Storage {
    private _data: StorageModel[];

    constructor(){
        this._data = storage;
    }

    get allStorage(){
        return this._data;
    }

    private set updateStorage(storage: StorageModel) {
        this._data = this._data.map((item) => {
            if(item.id !== storage.id) return item;

            return storage
        })
    }

    protected getStorage(id: number): StorageModel {
        return this._data.find((item) => item.id === id);
    }

    protected setProduct(id:number, product: ProductsModel){
        const storage = this.getStorage(id);
        storage.products.push(product);

        this.updateStorage = storage;
    }
}