import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simply a test','https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),
    new Recipe('A Test Recipe','This is a simply a test','https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
