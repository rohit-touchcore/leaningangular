import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  igChangeSub: Subscription;
  constructor(private slSerice: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slSerice.getIngredient();
    this.igChangeSub = this.slSerice.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(id:number){
    this.slSerice.startedEditing.next(id)
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }
}
