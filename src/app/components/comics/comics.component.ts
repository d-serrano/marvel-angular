import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../interfaces/comic';
//services
import { ComicService } from '../../services/comic.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  selectedComic: any ;
  comics:       Comic[] = [];
  loading:      boolean = false;
  isError:      boolean = false;

  constructor(private comicService : ComicService) { }

  ngOnInit(): void {
    this.getComics()
    console.log( 'Hola Home', this.comics )
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
