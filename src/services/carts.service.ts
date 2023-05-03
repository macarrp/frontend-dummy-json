import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carts } from 'src/model/carts.model';
import { ResponsePaginated } from 'src/model/response-paginated.model';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  URL_API: string = environment.API_URL;

  constructor(private readonly http: HttpClient) { 
    
  }

  getAllCarts():Observable<ResponsePaginated<Carts>> {
    return this.http.get<ResponsePaginated<Carts>>(this.URL_API + 'carts');
  }

  getLimitedAmountOfCarts(amountOfCarts: number):Observable<ResponsePaginated<Carts>> {
    return this.http.get<ResponsePaginated<Carts>>(this.URL_API + 'carts?limit=' + amountOfCarts);
  }
}
