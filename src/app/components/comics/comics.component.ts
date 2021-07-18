import { Component, Input, OnInit } from '@angular/core';
// interfaces
import { Comic } from '../../interfaces/comic';
//services
import { ComicService } from '../../services/comic.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  comics:       Comic[] = [];
  loading:      boolean = false;
  isError:      boolean = false;

  constructor(private comicService : ComicService) { }

  ngOnInit(): void {
    this.getComics()
  }
  getComics(): void {
    this.comicService.getComics().subscribe((result: any) => {
      this.comics = result.data.results;
      this.loading = false;
      console.log( 'Data : ', this.comics )
    }, (serrviceError => {
      this.isError = true;
      this.loading = false;
      console.log('serviceError : ', serrviceError);
    } ) );
  }
}
