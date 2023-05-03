import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  URL_FAKE_API: string = environment.API_URL;
  API_NAME: string = environment.API_NAME;

  constructor() { }

  ngOnInit(): void {
    console.log("FAKE API: " + this.URL_FAKE_API);
  }

}
