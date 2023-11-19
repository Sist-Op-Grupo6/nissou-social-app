import { Product } from "./product";
import { user } from "./user";

export interface Publication {
    id: any;
    author: user;
    date: any;
    product: Product;
    title: any;
    description: any;
    likes: any;
}