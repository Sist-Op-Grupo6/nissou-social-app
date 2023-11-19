import { Component } from '@angular/core';
import { NissouService } from 'src/app/services/nissou.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from 'src/app/models/publication';

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

    const auxTitle = this.pubTitle;
    const auxDescription = this.pubDescription;


    const userData = JSON.parse(localStorage.getItem('user') || '{}');

    if (userData && userData.id) {
      this.productService.createProduct(productData).subscribe(
        (createdProduct) => {
          console.log(createdProduct);
          console.log(userData);
          console.log("++++++++++++++++++++++++++++++++++++++++++++");
          console.log(auxTitle);
          console.log(auxDescription);

          const publicationData: Publication = {
            id: 'string',
            date: '2022',
            title: auxTitle,
            description: auxDescription,
            likes: 0,
          };
          
          console.log(publicationData);

          // Lógica para crear la publicación con el producto
          this.publicationService.createPublication(userData.id, createdProduct.id, publicationData).subscribe(
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
