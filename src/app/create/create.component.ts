import { Component, OnInit } from '@angular/core';
import { simpleCrudService } from '../simplecrud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;
  product: Product;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: simpleCrudService
  ){ }
  ngOnInit() {
      this.productForm = this.fb.group({
       id:[],
      name: [],
      description: [],
      price: [],
      quantity: [],    
    })
  }

  submitForm() {
    this.product=this.productForm.value
    console.log(this.product)
    this.crudService.create(this.productForm.value).subscribe(res => {
      console.log(res)
      console.log('Product created!')
      this.router.navigateByUrl('viewproducts')
    });
  }
}



