import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  items = [
    { name: 'Teapot', tier: 'S Tier' },
    { name: 'Lamp', tier: 'A Tier' },
    { name: 'Phone', tier: 'B Tier' },
    { name: 'Television', tier: 'C Tier' },
    { name: 'Flashbowl', tier: 'B Tier' }
  ];

  selectedItem: any;

  selectItem(item: any) {
    this.selectedItem = item;
  }
  
}
