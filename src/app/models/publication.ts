import { Product } from "./product";
import { user } from "./user";

export interface Publication {
    id: any;
    author?: user | null;
    date: any;
    product?: Product | null;
    title: any;
    description: any;
    likes: any;
}