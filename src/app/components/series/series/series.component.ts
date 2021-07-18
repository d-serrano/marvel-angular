import { Component, OnInit } from '@angular/core';
// interfaces
import { Serie } from '../../../interfaces/serie';
//services
import { SeriesService } from '../../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series:       Serie[] = [];
  loading:      boolean = false;
  isError: boolean = false;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getSeries()
  }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((result: any) => {
      this.series = result.data.results;
      this.loading = false;
      console.log( 'Data : ', this.series )
    }, (serrviceError => {
      this.isError = true;
      this.loading = false;
      console.log('serviceError : ', serrviceError);
    } ) );
  }
}
