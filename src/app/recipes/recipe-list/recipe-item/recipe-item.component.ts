import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('item') recipe: Recipe;
  @Input() index: number;

  ngOnInit(): void {}
}
