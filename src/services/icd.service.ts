import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IcdService {
  private apiUrl = 'https://id.who.int/icd/release/11';

  constructor(private http: HttpClient) { }

  getLinearizationInfo(linearizationName: string): Observable<any> {
    const headers = new HttpHeaders({
      'API-Version': 'v2',
      'Accept-Language': 'fr',
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    });

    return this.http.get(`${this.apiUrl}/${linearizationName}`, { headers });
  }

  getReleaseInfo(releaseId: string, linearizationName: string): Observable<any> {
    const headers = new HttpHeaders({
      'API-Version': 'v2',
      'Accept-Language': 'fr',
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    });

    return this.http.get(`${this.apiUrl}/${releaseId}/${linearizationName}`, { headers });
  }

  // Ajoutez d'autres méthodes pour les autres endpoints ici
}
