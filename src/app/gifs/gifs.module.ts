import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { SearchGifsComponent } from './components/search-gifs/search-gifs.component';
import { GifsComponent } from './components/gifs/gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGifsComponent,
    GifsComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
