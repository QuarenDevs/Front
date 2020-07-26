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
  },
  {
    path: 'cuentanos-sobre-ti',
    loadChildren: () => import('./pages/cuentanos-sobre-ti/cuentanos-sobre-ti.module').then( m => m.CuentanosSobreTiPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'tus-sucursales',
    loadChildren: () => import('./pages/tus-sucursales/tus-sucursales.module').then( m => m.TusSucursalesPageModule)
  },
  {
    path: 'queconfigurar',
    loadChildren: () => import('./pages/queconfigurar/queconfigurar.module').then( m => m.QueconfigurarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
