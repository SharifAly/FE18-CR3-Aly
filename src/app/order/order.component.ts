import { Component, OnInit } from '@angular/core';
import { IMenu } from '../menu/menu';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  order: Array<IMenu> = [];
  constructor(private os: OrderService) {}
  ngOnInit(): void {
    this.order = this.os.getOrder();
  }
}
