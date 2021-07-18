import { Component, Input, OnInit } from '@angular/core';
//interface
import { Serie } from '../../../interfaces/serie'
@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss']
})
export class SerieCardComponent implements OnInit {
  @Input() serie: Serie | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
