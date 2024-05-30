import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articol',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1> Titlul unui articol</h1>
    <p>
      articol works!
    </p>
  `,
  styles: [
  ]
})
export class ArticolComponent {

}
