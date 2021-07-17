import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comic/:id', component: ComicDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
