import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.scss',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      parseInt(this.amountInput.nativeElement.value)
    );
    console.log(newIngredient);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }
}
