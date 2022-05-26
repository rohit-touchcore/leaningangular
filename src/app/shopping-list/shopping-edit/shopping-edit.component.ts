import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value
    const ingredient = new Ingredient(name,amount)
    this.ingredientAdded.emit(ingredient)
  }
}
