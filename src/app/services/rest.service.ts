import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) { }

    public get(url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer LKAJSDKLJASD'
        });

        return this.http.get(url, { headers: headers });
    }
}
