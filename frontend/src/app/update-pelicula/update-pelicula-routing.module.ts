import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePeliculaPage } from './update-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePeliculaPageRoutingModule {}