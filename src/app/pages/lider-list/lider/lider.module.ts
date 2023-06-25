import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiderComponent } from './lider.component';
import { CelulaService } from 'src/app/shared/services/celula.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LiderComponent }];

@NgModule({
  declarations: [LiderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  providers: [CelulaService],
  exports: [LiderComponent],
})
export class LiderModule {}
