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
  }, 
  {
    path: 'login', 
    loadChildren: () =>import('./login/login.module').then( (m) => m.LoginPageModule ) 
  }, 
  {
    path: 'lista-sucursales', 
    loadChildren: () =>import('./lista-sucursales/lista-sucursales.module').then( (m) => m.ListaSucursalesPageModule ) 
  }, 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
