import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.page.html',
  styleUrls: ['./list-peliculas.page.scss'],
})
export class ListPeliculasPage implements OnInit {

  peliculas: any = [];

  constructor(private peliculaService: PeliculaService, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.getAllPeliculas();
  }

  getAllPeliculas() {
    this.peliculaService.getPeliculas().subscribe(movies => {
      console.log(movies);
      this.peliculas = movies;
    })
  }

  addPelicula(){
    this.router.navigateByUrl("/add-pelicula");
  }

  updatePelicula(){
    this.router.navigateByUrl("/update-pelicula");
  }

  deletePelicula(id){
    if (window.confirm('Are you sure?')) {
      this.peliculaService. deletePelicula(id)
      .subscribe(() => {
          this.ionViewDidEnter(); 
          console.log('Pelicula deleted!')
        }
      )
    }
  }
}
