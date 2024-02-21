import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrl: './receipe-item.component.scss'
})
export class ReceipeItemComponent {
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService){}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
