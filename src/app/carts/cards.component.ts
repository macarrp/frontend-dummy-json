import { Component, OnInit } from '@angular/core';
import { Carts as Cards } from 'src/model/carts.model';
import { CartsService } from 'src/services/carts.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Cards[] = [];

  constructor(private readonly cartsService: CartsService) { }

  ngOnInit(): void {
    this.getLimitedAmountOfCarts();
  }

  getAllCarts(): void {
    this.cartsService.getAllCarts()
    .subscribe(response => {
      this.cards = response.carts;
    },
    error => {
      alert("Productos no encontrados, error: " + error);
    });
  }

  getLimitedAmountOfCarts(): void {
    this.cartsService.getLimitedAmountOfCarts(5)
    .subscribe(response => {
      this.cards = response.carts;
    },
    error => {
      alert("Productos no encontrados, error: " + error);
    });
  }

}
