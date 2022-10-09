import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPeliculaPageRoutingModule } from './add-pelicula-routing.module';

import { AddPeliculaPage } from './add-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPeliculaPageRoutingModule
  ],
  declarations: [AddPeliculaPage]
})
export class AddPeliculaPageModule {}
