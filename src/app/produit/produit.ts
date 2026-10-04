import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit as ProduitModel } from '../produit';
import { ProduitService } from '../produit-service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class ProduitComponent {

  produits: ProduitModel[] = [];

  constructor(private produitService: ProduitService) {
    this.produits = this.produitService.getProduits();
  }

  supprimerProduit(id: number) {
    this.produitService.supprimerProduit(id);
    this.produits = this.produitService.getProduits();
  }

}