import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { rooms } from './rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private readonly API = ''
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<rooms[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
