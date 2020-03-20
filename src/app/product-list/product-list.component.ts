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
    let item = this.items.find(listItem => {
      console.log('listItem: ', listItem.id, ' prod: ', prod.id)
      return listItem.id == prod.id
    });
    if (item !== undefined) {
      item.qty = item.qty + qty;
      item.total = item.qty * item.price;
    } else {
      this.items.push({price: prod.price, id: prod.id, qty: qty, total: qty * prod.price, name: prod.name})
    }
    console.log('item added: ', item, this.items)
    window.alert(qty + ' ' + prod.name + ' added to your cart');
  }

  removeItem(index: number) {
    console.log('before item removed: ', index, this.items)
    window.alert(this.items[index].name + ' removed from your cart');
    this.items.splice(index, 1)
    console.log('item removed: ', index, this.items)
  }

  get totalItems(): number {
    return this.items.reduce(function (prev, curr) {
      return (prev + curr.total)
    }, 0)
  }

}
