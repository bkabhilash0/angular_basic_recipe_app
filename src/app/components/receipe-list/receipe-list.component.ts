import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrl: './receipe-list.component.scss',
})
export class ReceipeListComponent implements OnInit {
  recipes: Array<Recipe> = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
