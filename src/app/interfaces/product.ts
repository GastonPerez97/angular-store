export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    urlImage: string;
    price: number;
    quantity: number | 1;
    totalPrice?: number;
}