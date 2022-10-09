import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePeliculaPageRoutingModule } from './update-pelicula-routing.module';

import { UpdatePeliculaPage } from './update-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdatePeliculaPageRoutingModule
  ],
  declarations: [UpdatePeliculaPage]
})
export class UpdatePeliculaPageModule {}
