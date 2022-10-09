import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-pelicula',
  templateUrl: './add-pelicula.page.html',
  styleUrls: ['./add-pelicula.page.scss'],
})
export class AddPeliculaPage implements OnInit {

  peliculaForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private peliculaService: PeliculaService,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.peliculaForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.peliculaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.peliculaForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.peliculaForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.peliculaService.createPelicula(this.peliculaForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/list-peliculas");
      })
    }
  }
}
