import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[] = [];

  ajouterProduit(produit: Produit) {
    this.produits.push(produit);
  }

  getProduits(): Produit[] {
    return this.produits;
  }

  supprimerProduit(id: number) {
    this.produits = this.produits.filter(p => p.id !== id);
  }

  getProduit(id: number): Produit | undefined {
    return this.produits.find(p => p.id === id);
  }

  modifierProduit(produitModifie: Produit) {
    const index = this.produits.findIndex(p => p.id === produitModifie.id);

    if (index !== -1) {
      this.produits[index] = produitModifie;
    }
  }

}