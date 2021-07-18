import { Component, OnInit } from '@angular/core';
// Interfaces
import { Comic } from 'src/app/interfaces/comic';
import { Serie } from 'src/app/interfaces/serie';
// services
import { ComicService } from '../../services/comic.service';
import { SeriesService } from '../../services/series.service';
// env variables
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comics: Comic[] = [];
  comicsImg: string = '';
  comicsUrl: string = `${environment.baseUrl}/comics`;
  series: Serie[] = [];
  seriesImg: string = '';
  seriessUrl: string = `${environment.baseUrl}/series`;
  loading: boolean = false;
  isError: boolean = false;
  
  constructor(private comicService: ComicService,
    private seriesService: SeriesService) {}
  ngOnInit(): void {
    this.getComics();
    this.getSeries();
    console.log(' : ', window.location.pathname )
    
  }
  getComics(): void {
    this.comicService.getComics().subscribe((result: any) => {
      this.comics = result.data.results;
      let index = this.comics.reduce((acc, element, index) =>
        !element.thumbnail.path.endsWith('image_not_available') ? index : acc
      , 0);
      this.comicsImg = `${this.comics[index].thumbnail.path}.${this.comics[index].thumbnail.extension}`;
      this.loading = false;
      console.log( 'Data : ', this.comics, this.comicsImg )
    }, (serrviceError => {
      this.isError = true;
      this.loading = false;
      console.log('serviceError : ', serrviceError);
    } ) );
  }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((result: any) => {
      this.series = result.data.results;
      let index = this.series.reduce((acc, element, index) =>
        !element.thumbnail.path.endsWith('image_not_available') ? index : acc
      , 0);
      this.seriesImg = `${this.series[index].thumbnail.path}.${this.series[index].thumbnail.extension}`;
      this.loading = false;
      console.log( 'Data : ', this.series )
    }, (serrviceError => {
      this.isError = true;
      this.loading = false;
      console.log('serviceError : ', serrviceError);
    } ) );
  }
}
