import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//http 
import { HttpClientModule } from '@angular/common/http';
// material
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
//Components
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layaout/header/header.component';
import { SeriesComponent } from './components/series/series/series.component';
import { SeriesModalComponent } from './components/series/series-modal/series-modal.component';
import { SerieCardComponent } from './components/series/serie-card/serie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ComicsComponent,
    ComicCardComponent,
    ComicDetailComponent,
    HeaderComponent,
    SeriesComponent,
    SeriesModalComponent,
    SerieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
