import { Component, OnInit } from '@angular/core';
import { Celula } from 'src/app/shared/models/celula';
import { CelulaService } from 'src/app/shared/services/celula.service';

@Component({
  selector: 'app-lider-list',
  templateUrl: './lider-list.component.html',
  styleUrls: ['./lider-list.component.scss'],
})
export class LiderListComponent implements OnInit {
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
