import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-peliculas',
    pathMatch: 'full'
  },
  {
    path: 'add-pelicula',
    loadChildren: () => import('./add-pelicula/add-pelicula.module').then( m => m.AddPeliculaPageModule)
  },
  {
    path: 'list-peliculas',
    loadChildren: () => import('./list-peliculas/list-peliculas.module').then( m => m.ListPeliculasPageModule)
  },
  {
    path: 'update-pelicula',
    loadChildren: () => import('./update-pelicula/update-pelicula.module').then( m => m.UpdatePeliculaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
