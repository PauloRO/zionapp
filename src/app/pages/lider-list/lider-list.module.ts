import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CelulaService } from 'src/app/shared/services/celula.service';
import { LiderListComponent } from './lider-list.component';

const routes: Routes = [{ path: '', component: LiderListComponent }];

@NgModule({
  declarations: [LiderListComponent, LiderListComponent],
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
