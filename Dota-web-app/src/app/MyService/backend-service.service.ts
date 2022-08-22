import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  constructor(private http: HttpClient) {}
  getData(value: string) {
    return this.http.get(`http://127.0.0.1:5000/getData/${value}`);
  }

  getHeroesDetails(value: number, lang: string) {
    return this.http.get(`http://127.0.0.1:5000/getHeroData/${value}/${lang}`);
  }
}
