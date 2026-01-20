import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(
    private http: HttpClient
  ) { }

  search(address: string) {
    const url = 'https://nominatim.openstreetmap.org/search';
    return this.http.get<any[]>(url, {
      params: {
        q: address,
        format: 'json',
        limit: '1'
      }
    });
  }
}
