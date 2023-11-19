import { Component } from '@angular/core';
import { NissouService } from 'src/app/services/nissou.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css'],
})
export class AddPublicationComponent {
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
    private publicationService: PublicationService,
    private productService: ProductService
  ) {}

  addPublication() {
    const productData = {
      id: '',
      name: this.productName,
      description: this.productDescription,
      price: this.productPrice,
      image: this.productImage,
      weight: this.productWeight,
      material: this.productMaterial,
      quantity: this.productQuantity,
    };


    const userData = JSON.parse(localStorage.getItem('user') || '{}');

    if (userData && userData.id) {
      this.productService.createProduct(productData).subscribe(
        (createdProduct) => {
          console.log(createdProduct);
          const createdProductId = this.productService.getCreatedProductId()!;
          console.log(createdProductId);
          console.log(userData);

          const publicationData = {
            id: '',
            author: userData,
            date: '',
            product: createdProduct, 
            title: this.pubTitle,
            description: this.pubDescription,
            likes: 0,
          };
  
          // Lógica para crear la publicación con el producto
          this.publicationService.createPublication(userData.id, createdProductId, publicationData).subscribe(
            (res) => {
              console.log(res);
              this.router.navigate(['/home']);
            },
            (err) => {
              console.log(err);
            }
          );
        },
        (err) => {
          console.log(err);
        }
      );
    }

    this.resetForm();
  }

  resetForm() {
    this.pubTitle = '';
    this.pubDescription = '';

    this.productName = '';
    this.productDescription = '';
    this.productPrice = undefined;
    this.productImage = '';
    this.productWeight = undefined;
    this.productMaterial = '';
    this.productQuantity = undefined;
  }
}
