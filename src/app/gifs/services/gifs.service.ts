import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey = environment.apiKey;
  private url = environment.baseUrl;
  private _history: string[] = [];
  private _gifs: any[] = [];

  constructor(private http:HttpClient) { }

  get history(): string[] {
    return [ ...this._history ];
  }

  get gifs(): any[] {
    return [ ...this._gifs ];
  }

  searchGif(query: string): void {
    query = query.toLocaleLowerCase();
    if(!this._history.includes(query) ) {
      this.saveInHistory(query);
      this.getGifs(query).subscribe((resp: any) => {
        console.log(resp.data);
        this._gifs = resp.data;
      });
    }
  }

  private saveInHistory(query: string) {
    this._history.unshift(query);
    this._history = this._history.splice(0, 10);
  }

  private getGifs( query: string ): Observable<any> {
    const httpParams = new HttpParams()
                            .append('apiKey', this.apiKey)
                            .append('q', query)
                            .append('limit', 10);
    
    return this.http.get(this.url,{params: httpParams});
    
  }
}
