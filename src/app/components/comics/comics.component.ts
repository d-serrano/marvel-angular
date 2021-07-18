import { Component, Input, OnInit } from '@angular/core';
// interfaces
import { Comic } from '../../interfaces/comic';
//services
import { ComicService } from '../../services/comic.service';
// material
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';;

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  comics:       Comic[] = [];
  loading:      boolean = false;
  isError:      boolean = false;
  // MatPaginator Inputs
   page = 4; 
  constructor(private comicService: ComicService,
                config: NgbPaginationConfig  ) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }

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
