import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrl: './receipe-detail.component.scss',
})
export class ReceipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
