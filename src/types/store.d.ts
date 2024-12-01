import { ChildType } from "./child";

declare namespace StoreType {
  interface Item {
    id: number;
    childId: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    child: ChildType.Child;
  }
}
