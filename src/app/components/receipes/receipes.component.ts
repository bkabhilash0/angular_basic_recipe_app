import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrl: './receipes.component.scss',
  providers: [RecipeService],
})
export class ReceipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe) => (this.selectedRecipe = recipe)
    );
  }
}
