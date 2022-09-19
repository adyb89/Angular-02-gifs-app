import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
    const history = localStorage.getItem('history');
    history &&     
      this.gifsService.setHistory(JSON.parse(history));
  }

  get history(): string[] {
    return this.gifsService.history;
  }

  onSelectGif( query: string ): void {
    this.gifsService.getGifs(query);
  }

}
