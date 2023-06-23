import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CelulaComponent } from './celula.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [{ path: '', component: CelulaComponent }];

@NgModule({
  declarations: [CelulaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  exports: [CelulaComponent],
})
export class CelulaModule {}
