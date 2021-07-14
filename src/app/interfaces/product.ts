export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    urlImage: string;
    price: number;
    quantity: number | 1;
    totalPrice?: number;
}