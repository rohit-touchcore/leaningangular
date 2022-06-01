import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.module';

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
      [new Ingredient('Egg', 2)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a simply a test',
      'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
      [new Ingredient('Potato', 2)]
    ),
  ];
  getRecipe() {
    return this.recipes.slice();
  }
  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    console.log(index)
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  addIngredientsToSl(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
