import { Component } from '@angular/core';

@Component({
  selector: 'app-fuel',
  standalone: true,
  imports: [],
  templateUrl: './fuel.component.html',
  styleUrl: './fuel.component.css'
})
export class FuelComponent {
  data: any;

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    fetch('http://localhost:3000/api/items')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.data = data;
        console.log(this.data)
      }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
}
