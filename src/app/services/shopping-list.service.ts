import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient);
    // }
    this.ingredients.push(...this.ingredients, ...ingredients);
  }
}
