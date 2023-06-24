import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiderListComponent } from './lider-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CelulaService } from 'src/app/shared/services/celula.service';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LiderListComponent }];

@NgModule({
  declarations: [LiderListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  providers: [CelulaService],
  exports: [LiderListComponent],
})
export class LiderListModule {}
