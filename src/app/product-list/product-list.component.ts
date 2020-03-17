import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Product } from './product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  selectedProd: Product = this.products[0];
  qty: number = 0;
  items: Array<any> = [];

  addItem(prod: Product, qty: number) {
    let item = this.items.find(listItem => listItem.id == prod.id);
    if (item === undefined) {
      this.items.push({price: prod.price, id: prod.id, qty: qty, total: qty * prod.price, name: prod.name})
    } else {
      item.cantidad = item.qty + qty;
      item.total = item.qty * item.price;
    }
    console.log('item added: ', item, this.items)
  }

  removeItem(index: number) {
    this.items.splice(index, 1)
    console.log('item removed: ', index, this.items)
  }

  get totalItems(): number {
    return this.items.reduce(function (prev, curr) {
      return (prev + curr.total)
    }, 0)
  }


  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
