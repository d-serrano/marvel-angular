import { Component, OnInit } from '@angular/core';
// env
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Marvel Comics - Angular'
  homeUrl = `${environment.baseUrl}/home/`
  constructor() { }

  ngOnInit(): void {
  }

}
