import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Celula } from 'src/app/shared/models/celula';
import { CelulaService } from 'src/app/shared/services/celula.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lider-list',
  templateUrl: './lider-list.component.html',
  styleUrls: ['./lider-list.component.scss'],
})
export class LiderListComponent implements OnInit {
  celulas: Celula[] = [];

  constructor(private celulaService: CelulaService, private router: Router) {}

  ngOnInit() {
    this.findCelulas();
  }

  findCelulas(): void {
    this.celulaService.getInformacoesCelula().subscribe((res) => {
      this.celulas = res as Celula[];
      console.log(res);
    });
  }

  toLider(celulaId: number) {
    this.router.navigate([`/lider-list/lider/${celulaId}`]);
  }
}
