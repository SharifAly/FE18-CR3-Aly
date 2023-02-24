import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { menu, IMenu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menu: Array<IMenu> = menu;

  constructor(private os: OrderService) {}

  addToOrder(obj: IMenu) {
    alert('added');
    this.os.addToOrder(obj);
  }
}
