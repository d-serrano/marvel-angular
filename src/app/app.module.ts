import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//http 
import { HttpClientModule } from '@angular/common/http';
//Components
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ComicsComponent,
    ComicCardComponent,
    ComicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
