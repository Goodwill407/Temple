import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    apiURL = 'http://64.227.177.91:5000/'; // development
  //  apiURL = 'http://143.110.179.113:3000/v1/'; // productionn

  token = '';
  headerToken: any

  constructor(private http: HttpClient) {
      this.setTokens();
  }

  post(url: string, data: any) {
      if (url.includes('refresh-tokens')) {
          return this.http.post<any>(this.apiURL + url, data);
      } else {
          return this.http.post<any>(this.apiURL + url, data, { headers: this.headerToken });
      }
  }

  patch(url: string, data: any) {
      const type = Object.getPrototypeOf(data);
      let id: any;
      if (type.append) {
          const stringifyId = JSON.stringify(Object.fromEntries(data));
          const pasrseId = JSON.parse(stringifyId);
          id = pasrseId.id;
          data.delete("id");
      } else {
          id = data.id;
          delete data.id;
      }
      return this.http.patch<any>(this.apiURL + url + "/" + id, data, { headers: this.headerToken });
  }

  get(url: string) {
      return this.http.get<any>(this.apiURL + url);
  }

  getById(url: string, id: string) {
      return this.http.get<any>(this.apiURL + url + "/" + id, { headers: this.headerToken });
  }

  delete(url: string, id: any) {
      return this.http.delete<any>(this.apiURL + url + "/" + id, { headers: this.headerToken });
  }

  setTokens() {
      const token = JSON.parse(sessionStorage.getItem('tokens') || '{}');
      if (token && token.access) {
          this.token = token.access.token;
          this.headerToken = new HttpHeaders({
              'Authorization': `Bearer ${this.token}`
          });
      }
  }

  // communication set up for login
  private isLoggedInSubject = new Subject<boolean>();

  setLoggedIn(value: boolean): void {
      this.isLoggedInSubject.next(value);
  }

  getLoggedIn(): Subject<boolean> {
      return this.isLoggedInSubject;
  }
}