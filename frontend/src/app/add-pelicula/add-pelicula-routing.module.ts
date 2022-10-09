import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPeliculaPage } from './add-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: AddPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPeliculaPageRoutingModule {}
