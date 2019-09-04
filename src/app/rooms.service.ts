import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { rooms } from './rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private readonly API = 'http://meuhotel.bitzsoftwares.com.br/snippet/search/496?data=%7B%22solicitante%22%3A%22%22%2C%22documento%22%3A%22%22%2C%22email%22%3A%22%22%2C%22telefone%22%3A%22%22%2C%22diarias%22%3A1%2C%22adultos%22%3A%221%22%2C%22totalAdultos%22%3A1%2C%22criancas%22%3A%220%22%2C%22totalCriancas%22%3A0%2C%22totalSuites%22%3A0%2C%22dataInicial%22%3A%2227%2F08%2F2019%22%2C%22dataFinal%22%3A%2228%2F08%2F2019%22%2C%22valorTotal%22%3A0%2C%22totalFormat%22%3A%22%22%7D'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<rooms[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
