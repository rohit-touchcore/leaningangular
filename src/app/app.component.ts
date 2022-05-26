import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string = '';
  password: string = '';
  users: Array<any> = [];
  submit(): void {
    console.log(this.email);
    console.log(this.password);
    let newUserObj = {
      email: this.email,
      password: this.password,
    };
    this.users.push(newUserObj)
    this.email = ''
    this.password = ''
  }
}
