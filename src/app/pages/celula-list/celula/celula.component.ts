import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Celula } from 'src/app/shared/models/celula';
import { CelulaService } from 'src/app/shared/services/celula.service';

@Component({
  selector: 'app-celula',
  templateUrl: './celula.component.html',
  styleUrls: ['./celula.component.scss'],
})
export class CelulaComponent implements OnInit {
  celula: Celula = {} as Celula;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private celulaService: CelulaService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.findCelula(parseInt(id));
  }

  findCelula(id: number): void {
    this.celulaService.getCelulaPorId(id).subscribe((res) => {
      this.celula = res;
      console.log(this.celula);
    });
  }

  cancel() {
    this.router.navigate([`/celula-list`]);
  }
}
