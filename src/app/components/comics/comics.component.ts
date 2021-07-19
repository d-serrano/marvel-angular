import { Component, OnInit } from '@angular/core';
// interfaces
import { Comic } from '../../interfaces/comic';
//services
import { ComicService } from '../../services/comic.service';
// pagination
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit{
  comics:       Comic[] = [];
  loading:      boolean = false;
  isError:      boolean = false;
  // MatPaginator Inputs
  page: number = 1;
  comicsLimit: number = 10;
  constructor(private comicService: ComicService,
    config: NgbPaginationConfig  ) {
    // customize default values of paginations used by this component tree

    config.size = 'sm';
    config.boundaryLinks = true;
  }
  
  ngOnInit(): void {
    this.getComics(1, this.comicsLimit );
  }
  getComics( page: number , limit : number): void {
    this.comicService.getComicsPage(page, limit).subscribe((result: any) => {
      this.comics = result.data.results;
      this.loading = false;
      console.log( 'Data : ', this.comics )
    }, (serrviceError => {
      this.isError = true;
      this.loading = false;
      console.log('serviceError : ', serrviceError);
    } ) );
  }
  oNpageChange( page : number ) {
    console.log('Page changed', page);
    this.getComics(page, this.comicsLimit );
  }
}
