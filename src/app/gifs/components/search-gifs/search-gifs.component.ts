import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent implements OnInit {

  @ViewChild('txtSearch', {static:false}) searchBox!:ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    const box = this.searchBox.nativeElement;
    console.log(box.value);
    box.value = '';
  }

}
