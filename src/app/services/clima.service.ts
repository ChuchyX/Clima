import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  urlAPI = 'https://api.openweathermap.org/data/2.5/weather?q='; 
  apiKEY = '285edf2825c0b31f05ed03ee8359783a';
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>
  {
    const url = this.urlAPI + ciudad + '&appid=' + this.apiKEY;
    return this.http.get(url);
  }
}
