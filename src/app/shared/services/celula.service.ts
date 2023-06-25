import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celula } from '../models/celula';

@Injectable()
export class CelulaService {
  constructor(private http: HttpClient) {}

  getInformacoesCelula(): Observable<Celula[]> {
    return this.http.get<Celula[]>('assets/data/celulas.json');
  }

  getCelulaPorId(id: number): Observable<Celula> {
    return new Observable<Celula>((observer) => {
      this.getInformacoesCelula().subscribe((celulas) => {
        const celulaEncontrada = celulas.find((celula) => celula.id === id);

        observer.next(celulaEncontrada);

        observer.complete();
      });
    });
  }
}
