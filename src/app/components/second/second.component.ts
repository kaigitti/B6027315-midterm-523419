import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    productID: new FormControl(""),
    productName: new FormControl(""),
    productDetail: new FormControl(""),
    productQuantity: new FormControl('',[Validators.required]),
    productPrice: new FormControl(""),
  });



  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }

  get productQuantity() {
    return this.productForm.get('productQuantity');
  }

  addProduct(){

  }

  resetButton(){

  }
}
