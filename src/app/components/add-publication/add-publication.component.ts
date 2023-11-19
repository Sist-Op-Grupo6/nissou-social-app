import { Component } from '@angular/core';
import { NissouService } from 'src/app/services/nissou.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent {
  title: string = '';
  description: string = '';
  images: string[] = [];
  price: number | undefined;
  category: string = '';
  condition: string = '';

  constructor(private nissouService: NissouService, private router: Router) { }

  addPublication() {
    const publicationData = {
      title: this.title,
      description: this.description,
      images: this.images,
      price: this.price,
      category: this.category,
      condition: this.condition
    };
/*
    // Llama al servicio para enviar los datos al servidor
    this.nissouService.addPublication(publicationData).subscribe(
      (res) => {
        console.log(res);
        // Redirigir??
        this.router.navigate(['/products']);
      },
      (err) => {
        console.log(err);
      }
    );
*/
    // Restablece los campos del formulario después de enviar la publicación
    this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.images = [];
    this.price = undefined;
    this.category = '';
    this.condition = '';
  }

  handleImageUpload(event: any) {
    // Lógica para manejar la carga de imágenes
  }
}
