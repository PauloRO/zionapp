import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelulaComponent } from './celula.component';
import { CelulaService } from 'src/app/shared/services/celula.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [{ path: '', component: CelulaComponent }];

@NgModule({
  declarations: [CelulaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  providers: [CelulaService],
  exports: [CelulaComponent],
})
export class CelulaModule {}
