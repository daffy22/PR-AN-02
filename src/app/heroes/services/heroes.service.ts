import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _baseUrl: string = `${ environment.BASE_URL }`;
  private _apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  cyrb53 = function(str: string, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
}

  getHeroes() {
    const url: string = `${ this._baseUrl }/characters`;

    const params = new HttpParams()
            .set('name', 'spiderman')
            .set('apikey', this._apiKey)
            .set('ts', Date.now())
            .set('hash', this.cyrb53('hash'));
            // .set('limit', 20)
            // .set('orderBy', 'name');

    return this.http.get<any>(url, { params });
  }

}
