import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (id: number) => {
        // this.slService.editIngredient(id);
        this.editMode = true;
        this.editedItemIndex = id;
        this.editedItem = this.slService.getIngredientById(id);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onAddItem(f: NgForm) {
    const value = f.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.editIngredient(this.editedItemIndex, ingredient);
      this.editMode = false;
    } else {
      this.slService.addIngredient(ingredient);
    }
    this.slForm.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
