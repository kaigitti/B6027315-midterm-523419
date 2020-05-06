import { Injectable } from '@angular/core';
import { productsType } from "../products.model";

@Injectable()
export class ProductsService {

  product_list: productsType = [
    {p_id: 100001, p_name:"Intel Core i7 Gen 10th", p_quantity: 10, p_price: 9990},
    {p_id: 100002, p_name:"ASUS ROG Strix RTX2070 8G", p_quantity: 8, p_price: 15990},
    {p_id: 100003, p_name:"Kingston SSD KC600 1TB", p_quantity: 12, p_price: 3790},
    {p_id: 100004, p_name:"2066 MSI X299 PRO", p_quantity: 6, p_price: 7590},
    {p_id: 100005, p_name:"RAM DDR4(4500) 16GB (8GBX2) TEAM Xtream Black", p_quantity: 10, p_price: 4990},

  ]
  constructor() { }

  getAllProduct(){
    return this.product_list;
  }

  getSomeProduct(p_id: number){
    return this.product_list[p_id];
  }
}
