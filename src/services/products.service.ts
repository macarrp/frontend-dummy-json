import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/model/product.model';
import { ResponsePaginated } from 'src/model/response-paginated.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API: string = environment.API_URL;

  constructor(private readonly http: HttpClient) { 
    
  }

  getAllProducts():Observable<ResponsePaginated<Product>> {
    return this.http.get<ResponsePaginated<Product>>(this.URL_API + 'products');
  }

  getLimitedAmountOfProducts(numberOfProducts: number):Observable<ResponsePaginated<Product>> {
    return this.http.get<ResponsePaginated<Product>>(this.URL_API + 'products?limit=' + numberOfProducts);
  }
}
