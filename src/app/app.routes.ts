import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit';
import { AddProduit } from './add-produit/add-produit';
import { ModifierProduit } from './modifier-produit/modifier-produit';

export const routes: Routes = [
  {
    path: 'produit',
    component: ProduitComponent
  },
  {
    path: 'add-produit',
    component: AddProduit
  },
  {
    path: 'modifier-produit/:id',
    component: ModifierProduit
  },
  {
    path: '',
    redirectTo: 'produit',
    pathMatch: 'full'
  }
];