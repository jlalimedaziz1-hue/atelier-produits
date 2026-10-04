import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit-service';

@Component({
  selector: 'app-modifier-produit',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './modifier-produit.html',
  styleUrl: './modifier-produit.css'
})
export class ModifierProduit implements OnInit {

  id = 0;
  nom = '';
  prix = 0;
  dateCreation = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit() {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const produit = this.produitService.getProduit(this.id);

    if (produit) {
      this.nom = produit.nom;
      this.prix = produit.prix;
      this.dateCreation = produit.dateCreation;
    }
  }

  modifierProduit() {

    const produit: Produit = {
      id: this.id,
      nom: this.nom,
      prix: this.prix,
      dateCreation: this.dateCreation
    };

    this.produitService.modifierProduit(produit);

    this.router.navigate(['/produit']);
  }

}