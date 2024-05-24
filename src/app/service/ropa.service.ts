import { Injectable } from '@angular/core';
import { Uris } from './Uris';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  constructor(private http: HttpClient) {}
  getCatalago() {
    return this.http.get(`${Uris.USERS}`).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }

  createCatalago(obj: any) {
    return this.http.post(`${Uris.USERS}`, obj).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }

  deleteCatalago(id: string) {
    return this.http.delete(`${Uris.USERS}/${id}`).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }
}

