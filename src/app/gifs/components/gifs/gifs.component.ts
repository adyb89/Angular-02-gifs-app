import { Component, OnInit } from '@angular/core';
import { Gif } from '../../models/gifs.model';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
    this.gifsService.history.length > 0 &&
      this.gifsService.getGifs(localStorage.getItem('lastSearch')!);
  }

  get gifs(): Gif[] {
    return this.gifsService.gifs;
  }
}
