import { Injectable } from '@angular/core';
import { IMenu } from './menu/menu';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Array<IMenu> = [];
  constructor() {}

  addToOrder(obj: IMenu) {
    this.order.push(obj);
  }
  getOrder() {
    return this.order;
  }
}
