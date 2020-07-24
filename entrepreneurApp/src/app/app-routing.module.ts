import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'primero-lo-primero',
    loadChildren: () => import('./pages/primero-lo-primero/primero-lo-primero.module').then( m => m.PrimeroLoPrimeroPageModule)
  },
  {
    path: 'cuenta-creada',
    loadChildren: () => import('./pages/cuenta-creada/cuenta-creada.module').then( m => m.CuentaCreadaPageModule)
  },
  {
    path: 'redes-sociales',
    loadChildren: () => import('./pages/redes-sociales/redes-sociales.module').then( m => m.RedesSocialesPageModule)
  },
  {
    path: 'ty-c',
    loadChildren: () => import('./pages/ty-c/ty-c.module').then( m => m.TyCPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
