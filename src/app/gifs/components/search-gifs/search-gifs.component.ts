import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent implements OnInit {

  @ViewChild('txtSearch', {static:false}) searchBox!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  search() {
    const box = this.searchBox.nativeElement;
    const value = box.value;
    
    value.trim()
     && this.gifsService.searchGif(box.value);
    box.value = '';
  }

}
