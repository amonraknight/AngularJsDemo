import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  currentItem = 'Television';

  items = ['item1'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
