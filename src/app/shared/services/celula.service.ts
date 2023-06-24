import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CelulaService {
  constructor(private http: HttpClient) {}

  getInformacoesCelula() {
    return this.http.get('assets/data/celulas.json');
  }
}
