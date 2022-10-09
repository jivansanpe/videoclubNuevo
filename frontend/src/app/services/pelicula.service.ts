import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  endPoint = "http://localhost:8080/api/peliculas";

  constructor(private httpClient: HttpClient) { }

  getPeliculas(){
    return this.httpClient.get(this.endPoint);
  }

  createPelicula(pelicula, blob){
    let formData = new FormData();
    formData.append("nombre", pelicula.nombre);
    formData.append("fecha", pelicula.fecha);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  updatePelicula(pelicula, blob){
    let formData = new FormData();
    formData.set("nombre", pelicula.nombre);
    formData.set("fecha", pelicula.fecha);
    formData.set("file", blob);

    return this.httpClient.put(`${this.endPoint}/${pelicula.id}`, formData);
  }

  deletePelicula(id){
    return this.httpClient.delete(this.endPoint + '/' + id);
  }
}
