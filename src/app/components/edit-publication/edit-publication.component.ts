import { Component } from '@angular/core';
import { NissouService } from 'src/app/services/nissou.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from 'src/app/models/publication';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.css'],
})
export class EditPublicationComponent {
  publicationId: string = '';

  pubTitle: string = '';
  pubDescription: string = '';

  productName: string = '';
  productDescription: string = '';
  productPrice: number | undefined;
  productImage: string = '';
  productWeight: number | undefined;
  productMaterial: string = '';
  productQuantity: number | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private publicationService: PublicationService,
    private productService: ProductService
  ) {
    // Obtén el ID de la publicación de la URL
    const publicationId = this.route.snapshot.params['id'];

    // Lógica para obtener la información de la publicación y el producto a editar
    // Utiliza publicationId para hacer la solicitud correspondiente al servicio
    // y completa las propiedades pubTitle, pubDescription y otras propiedades necesarias
  }

  updatePublication() {
    // Llama a la función del servicio para actualizar la publicación
    this.publicationService.updatePublication(this.publicationId, this.pubTitle, this.pubDescription).subscribe(
      (updatedPublication) => {
        // Maneja la respuesta según tus necesidades
        console.log('Publicación actualizada:', updatedPublication);
        this.router.navigate(['/home']);
      },
      (error) => {
        // Maneja errores según tus necesidades
        console.error('Error al actualizar la publicación:', error);
      }
    );
  }
}
