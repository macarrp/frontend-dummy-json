import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private readonly productService: ProductsService) {

   }

  ngOnInit(): void {
    // this.getAllProducts();
    this.getLimitedAmountOfProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
    .subscribe(response => {
      this.products = response.products;
    },
    error => {
      alert("Productos no encontrados, error: " + error);
    });
  }

  getLimitedAmountOfProducts(): void {
    this.productService.getLimitedAmountOfProducts(5)
    .subscribe(response => {
      this.products = response.products;
    },
    error => {
      alert("Productos no encontrados, error: " + error);
    });
  }

}
