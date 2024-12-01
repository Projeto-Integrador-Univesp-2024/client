import { StoreType } from "./store";

declare namespace ProductType {
  interface Item {
    id: number;
    publicId: string;
    guardianId: number;
    name: string;
    image: string;
    points: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    productStore: ProductStore[];
  }

  interface ProductStore {
    id: number;
    storeId: number;
    productId: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    store: StoreType.Item;
  }
}
