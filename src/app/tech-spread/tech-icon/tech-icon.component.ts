import { Component, Input } from '@angular/core';

@Component({
  selector: 'tech-icon',
  imports: [],
  templateUrl: './tech-icon.component.html',
  styleUrl: './tech-icon.component.css'
})
export class TechIconComponent {
  @Input() name: string = "";
  @Input() link: string = "";

  onClick() {

  }
}
