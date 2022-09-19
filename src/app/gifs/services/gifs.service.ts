import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Gif, SearchGifsResponse } from '../models/gifs.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey = environment.apiKey;
  private url = environment.baseUrl;
  private _history: string[] = [];
  private _gifs: Gif[] = [];

  constructor(private http:HttpClient) { }

  get history(): string[] {
    return [ ...this._history ];
  }

  get gifs(): Gif[] {
    return [ ...this._gifs ];
  }

  searchGif(query: string): void {
    query = query.toLocaleLowerCase();
    if(!this._history.includes(query) ) {
      this.saveInHistory(query);
      this.getGifs(query)
    }
  }

  private saveInHistory(query: string) {
    this._history.unshift(query);
    this._history = this._history.splice(0, 10);
    localStorage.setItem('history', JSON.stringify(this._history));
    localStorage.setItem('lastSearch', this._history[0]);

  }

   getGifs( query: string ): void {
    const httpParams = new HttpParams()
                            .append('apiKey', this.apiKey)
                            .append('q', query)
                            .append('limit', 10);
    
     this.http.get<SearchGifsResponse>(this.url,{params: httpParams})
            .subscribe((resp: SearchGifsResponse) => {
                this._gifs = resp.data;
            });
  }

  setHistory(history: string[]): void {
    this._history = history;
  }
}
