// home.component.ts

import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private publicationService: PublicationService) {}

  ngOnInit(): void {
    // Obtener la lista de productos al inicializar el componente
    this.publicationService.getAllPublications().subscribe((publications) => {
      this.publications = publications;
    });
  }
}

