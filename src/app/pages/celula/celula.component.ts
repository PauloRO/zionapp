import { Component, OnInit } from '@angular/core';
import { Celula } from 'src/app/shared/models/celula';
import { CelulaService } from 'src/app/shared/services/celula.service';

@Component({
  selector: 'app-celula',
  templateUrl: './celula.component.html',
  styleUrls: ['./celula.component.scss'],
})
export class CelulaComponent implements OnInit {
  celulas: Celula[] = [];

  constructor(private celulaService: CelulaService) {}

  ngOnInit() {
    this.findCelulas();
  }

  findCelulas(): void {
    this.celulaService.getInformacoesCelula().subscribe((res) => {
      this.celulas = res as Celula[];
      console.log(res);
    });
  }
}
