import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Product {
    id: number,
    name: string,
    category: string,
    unitPrice: number,
    quantity: number,
    totalPrice: number
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
    private total$: Subject<number>;
    private products$: Subject<Product[]>;
    private countProducts$: Subject<number>;

    constructor() {
        this.total$ = new Subject();
        this.products$ = new Subject();
        this.countProducts$ = new Subject();
    }

    add(item: any) {
        localStorage.setItem(item.id, JSON.stringify(item));
        this.updateTotalAndProducts();
    }

    remove(id: string) {
        localStorage.removeItem(id);
        this.updateTotalAndProducts();
    }

    get(id: string) {
        return JSON.parse(localStorage.getItem(id)!);
    }

    getAll() {
        const items: Product[] = [];
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            items.push(JSON.parse(localStorage[key]));
        });

        return items;
    }

    getTotal() {
        const items: any = this.getAll();
        var total = 0;

        items.forEach((item: { totalPrice: any; }) => {
            total += item.totalPrice;
        });

        return total;
    }

    getCountProducts() {
        const items: any = this.getAll();
        var count = 0;

        items.forEach((item: Product) => {
            count += 1;
        });

        return count;
    }

    incrementQty(id: string) {
        var item = this.get(id);
        item.quantity++;
        this.updateProduct(item, id);
    }

    decrementQty(id: string) {
        var item = this.get(id);

        if (item.quantity === 1) {
            this.remove(id);
            this.updateTotalAndProducts();
            return;
        } else {
            item.quantity--;
            this.updateProduct(item, id);
        }
    }

    updateProduct(item: Product, id: string) {
        item.totalPrice = item.unitPrice * item.quantity;
        this.remove(id);
        this.add(item);
        this.updateTotalAndProducts();
    }

    getTotal$(): Observable<number> {
        return this.total$.asObservable();
    }

    getProducts$(): Observable<Product[]> {
        return this.products$.asObservable();
    }

    getCountProducts$(): Observable<number> {
        return this.countProducts$.asObservable();
    }

    updateTotalAndProducts() {
        this.total$.next(this.getTotal());
        this.products$.next(this.getAll());
        this.countProducts$.next(this.getCountProducts());
    }
}