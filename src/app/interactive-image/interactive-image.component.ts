import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-interactive-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-image.component.html',
  styleUrl: './interactive-image.component.css'
})
export class InteractiveImageComponent {
  hotspots: { x: number, y: number, link: string, color:string }[] = [
    { x: 0, y: 100, link: 'https://example.com/page1', color:'blue' },
    { x: 50, y: 0, link: 'https://example.com/page2', color:'red' },
    // Add more hotspots as needed
  ];
}
