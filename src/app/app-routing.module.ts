import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'celula',
    loadChildren: () =>
      import('./pages/celula/celula.module').then((m) => m.CelulaModule),
  },
  {
    path: 'lider-list',
    loadChildren: () =>
      import('./pages/lider-list/lider-list.module').then(
        (m) => m.LiderListModule
      ),
  },
  {
    path: 'lider-list/lider/:id',
    loadChildren: () =>
      import('./pages/lider-list/lider/lider.module').then(
        (m) => m.LiderModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
