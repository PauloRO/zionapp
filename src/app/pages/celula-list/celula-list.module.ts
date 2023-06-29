import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CelulaListComponent } from './celula-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CelulaService } from 'src/app/shared/services/celula.service';

const routes: Routes = [{ path: '', component: CelulaListComponent }];

@NgModule({
  declarations: [CelulaListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  providers: [CelulaService],
  exports: [CelulaListComponent],
})
export class CelulaListModule {}
