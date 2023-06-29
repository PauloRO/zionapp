import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celula } from 'src/app/shared/models/celula';
import { CelulaService } from 'src/app/shared/services/celula.service';

@Component({
  selector: 'app-celula-list',
  templateUrl: './celula-list.component.html',
  styleUrls: ['./celula-list.component.scss'],
})
export class CelulaListComponent implements OnInit {
  celulas: Celula[] = [];

  constructor(private celulaService: CelulaService, private router: Router) {}

  ngOnInit() {
    this.findCelulas();
  }

  findCelulas(): void {
    this.celulaService.getInformacoesCelula().subscribe((res) => {
      this.celulas = res as Celula[];
    });
  }

  toCelula(celulaId: number): void {
    this.router.navigate([`/celula-list/celula/${celulaId}`]);
  }
}
