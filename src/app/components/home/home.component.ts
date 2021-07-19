import { Component, OnInit } from '@angular/core';
// Interfaces
import { Comic } from 'src/app/interfaces/comic';
import { Serie } from 'src/app/interfaces/serie';
// servicese';
// env variables
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comicsImg: string = 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/60e5e1550f77e.jpg';
  comicsUrl: string = `${environment.baseUrl}/comics`;
  seriesImg: string = 'https://i.annihil.us/u/prod/marvel/i/mg/1/40/5e558a8495066.jpg';
  seriessUrl: string = `${environment.baseUrl}/series`;

  
  constructor() {}
  ngOnInit(): void {
  }

}
