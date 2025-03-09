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
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3NDE0ODU2NTMsImV4cCI6MTc0MTQ4OTI1MywiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjEyMjE1Y2QxLTM2MDgtNGI3Yy04ZmY4LTMyMTQzYjZiNzExNV82NjNlYjdhNC0xNjUzLTRkNjEtOWZkMy0wNTk0M2Y1NWNhMzMiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.Y-LAeYiTP6jAhg3MT_5u-NsaMvl_na6nWpj_ZIo6r_FYxDPzZBGNUp4n_z5HW8HT1UXN3-Ti4MQDpGbOZnB6Av-ogL6-5JdyQjw03avEAK6nAb0y5UWHdAEd2vc_e5GKydvspKXbS5kFOJZMUe8VhJR6OA-bdX8KKs-n8R1cNzb0tEDU8P3uR15Id9_zpNEfoZbjGkkrG4GMaOAdI_c-DUaD4fK5T5I7t1_0-dCT6Vbiw4xwB9K3Xy--Wow7az7VfdQ3kIc7SSIOBppC8xLXN25PPUTfG9JfN7ESgc-c4ERbkVtyl6mZvLcMiAXyIBGjEmvzToTPT8bWPDpr-3hO8A'
    });

    return this.http.get(`${this.apiUrl}/${linearizationName}`, { headers });
  }

  getReleaseInfo(releaseId: string, linearizationName: string): Observable<any> {
    const headers = new HttpHeaders({
      'API-Version': 'v2',
      'Accept-Language': 'fr',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3NDE0ODU2NTMsImV4cCI6MTc0MTQ4OTI1MywiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjEyMjE1Y2QxLTM2MDgtNGI3Yy04ZmY4LTMyMTQzYjZiNzExNV82NjNlYjdhNC0xNjUzLTRkNjEtOWZkMy0wNTk0M2Y1NWNhMzMiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.Y-LAeYiTP6jAhg3MT_5u-NsaMvl_na6nWpj_ZIo6r_FYxDPzZBGNUp4n_z5HW8HT1UXN3-Ti4MQDpGbOZnB6Av-ogL6-5JdyQjw03avEAK6nAb0y5UWHdAEd2vc_e5GKydvspKXbS5kFOJZMUe8VhJR6OA-bdX8KKs-n8R1cNzb0tEDU8P3uR15Id9_zpNEfoZbjGkkrG4GMaOAdI_c-DUaD4fK5T5I7t1_0-dCT6Vbiw4xwB9K3Xy--Wow7az7VfdQ3kIc7SSIOBppC8xLXN25PPUTfG9JfN7ESgc-c4ERbkVtyl6mZvLcMiAXyIBGjEmvzToTPT8bWPDpr-3hO8A'
    });

    return this.http.get(`${this.apiUrl}/${releaseId}/${linearizationName}`, { headers });
  }
  getDiseaseInfo(linearizationName: string): Observable<any> {
    const headers = new HttpHeaders({
      'API-Version': 'v2',
      'Accept-Language': 'fr',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3NDE0ODU2NTMsImV4cCI6MTc0MTQ4OTI1MywiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjEyMjE1Y2QxLTM2MDgtNGI3Yy04ZmY4LTMyMTQzYjZiNzExNV82NjNlYjdhNC0xNjUzLTRkNjEtOWZkMy0wNTk0M2Y1NWNhMzMiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.Y-LAeYiTP6jAhg3MT_5u-NsaMvl_na6nWpj_ZIo6r_FYxDPzZBGNUp4n_z5HW8HT1UXN3-Ti4MQDpGbOZnB6Av-ogL6-5JdyQjw03avEAK6nAb0y5UWHdAEd2vc_e5GKydvspKXbS5kFOJZMUe8VhJR6OA-bdX8KKs-n8R1cNzb0tEDU8P3uR15Id9_zpNEfoZbjGkkrG4GMaOAdI_c-DUaD4fK5T5I7t1_0-dCT6Vbiw4xwB9K3Xy--Wow7az7VfdQ3kIc7SSIOBppC8xLXN25PPUTfG9JfN7ESgc-c4ERbkVtyl6mZvLcMiAXyIBGjEmvzToTPT8bWPDpr-3hO8A'
    });

    const versionUrl = `https://id.who.int/icd/release/11/2025-01/mms`; // URL correcte pour la version et linéarisation
    return this.http.get(`${versionUrl}/linearizationName`, { headers });
  }


  // Ajoutez d'autres méthodes pour les autres endpoints ici
}
