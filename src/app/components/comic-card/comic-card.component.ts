import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/interfaces/comic';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {
  @Input() comic: Comic | undefined;
  comicThumbnail: string = '';
  comicUrl = `http://localhost:4200/comic/`
  constructor() { }

  ngOnInit(): void {
    this.comicThumbnail = `${this.comic?.thumbnail.path}.${this.comic?.thumbnail.extension}`;
    this.comicUrl += this.comic?.id;
  }
  
}
