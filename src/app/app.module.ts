import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ReceipesComponent } from './components/receipes/receipes.component';
import { ReceipeListComponent } from './components/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './components/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './components/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
