import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Test',
      'https://www.slobodenpecat.mk/wp-content/uploads/2023/08/%D0%BF%D0%B5%D1%87%D0%B5%D0%BD-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%87%D1%83%D0%BA-%D1%81%D0%BE-%D1%98%D0%B0%D1%98%D1%86%D0%B0-%D0%A4%D0%BE%D1%82%D0%BE-therecipestuff-in.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Recipe',
      'Test Another',
      'https://www.slobodenpecat.mk/wp-content/uploads/2023/08/%D0%BF%D0%B5%D1%87%D0%B5%D0%BD-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%87%D1%83%D0%BA-%D1%81%D0%BE-%D1%98%D0%B0%D1%98%D1%86%D0%B0-%D0%A4%D0%BE%D1%82%D0%BE-therecipestuff-in.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
