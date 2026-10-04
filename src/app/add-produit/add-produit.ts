import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit-service';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css'
})
export class AddProduit {

  nom = '';
  prix = 0;
  dateCreation = '';

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) {}

  ajouterProduit() {

    const produit: Produit = {
      id: Date.now(),
      nom: this.nom,
      prix: this.prix,
      dateCreation: this.dateCreation
    };

    this.produitService.ajouterProduit(produit);

    this.nom = '';
    this.prix = 0;
    this.dateCreation = '';

    this.router.navigate(['/produit']);
  }

}