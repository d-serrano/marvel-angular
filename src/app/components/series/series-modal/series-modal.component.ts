import { Component,Input, OnInit } from '@angular/core';
//interfaces
import { Serie } from '.././../../interfaces/serie';
import {
  Character,
  Creator,
  Date,
  Event,
  Story
} from 'src/app/interfaces/general';

@Component({
  selector: 'app-series-modal',
  templateUrl: './series-modal.component.html',
  styleUrls: ['./series-modal.component.scss']
})
export class SeriesModalComponent implements OnInit {
  @Input() serie: Serie | undefined;
  serieThumbnail: string = '';
  creatorsList: Creator[] = [];
  charactersList: Character[] = [];
  eventsList: Event[] = [];
  storiesList: Story[] = [];
  loading:        boolean = false;
  isError: boolean = false;
  constructor(  ) { }
  ngOnInit(): void {
    this.serieThumbnail = `${this.serie?.thumbnail.path}.${this.serie?.thumbnail.extension}`;
    this.creatorsList = this.serie?.creators.items || [];
    this.charactersList = this.serie?.characters.items || [];
    this.eventsList = this.serie?.events.items || [];
    this.storiesList = this.serie?.stories.items || [];
  }
  
}
