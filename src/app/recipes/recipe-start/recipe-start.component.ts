import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css'],
})
export class RecipeStartComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
