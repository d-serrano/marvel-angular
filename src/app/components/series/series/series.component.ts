import { Component, OnInit } from '@angular/core';
// interfaces
import { Serie } from '../../../interfaces/serie';
//services
import { SeriesService } from '../../../services/series.service';
// pagination
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series:       Serie[] = [];
  loading:      boolean = false;
  isError: boolean = false;
  // Paginator 
  // MatPaginator Inputs
  page: number = 1;
  comicsLimit: number = 10;
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getSeries(1, this.comicsLimit);
  }

  getSeries( page: number , limit : number): void {
    this.seriesService.getSeriesPage(page, limit).subscribe((result: any) => {
      this.series = result.data.results;
      this.loading = false;
      console.log( 'Data : ', this.series )
    }, (serrviceError => {
      this.isError = true;
      this.loading = false;
      console.log('serviceError : ', serrviceError);
    } ) );
  }

  oNpageChange( page : number ) {
    console.log('Page changed', page);
    this.getSeries(page, this.comicsLimit );
  }
}
