import { Component, Input } from '@angular/core';
import { techIcon, TechIconComponent } from "./tech-icon/tech-icon.component";
import techList from './tech-icon-list';
import { vec2 } from '../../utils/vec2';

const gap: number = 8;   //the spacing between each component, measured in px;
const size: number = 64;  //ths size of each component, measured in px
const stepSize: number = 0.5 * (gap + size);

@Component({
  selector: 'tech-spread',
  imports: [TechIconComponent],
  templateUrl: './tech-spread.component.html',
  styleUrl: './tech-spread.component.css'
})
export class TechSpreadComponent {
  techSpreadList: techIcon[] = techList.map((item) => {
    return { ...item, position: this.calculateCoordinates(item.position) }
  });
  isFiltering: boolean = false;

  handleIconToggled() {
    this.isFiltering = true;
  }

  calculateCoordinates(pos: vec2): vec2 {

    return {
      x: pos.x * stepSize - 32,
      y: pos.y * stepSize * 2 - 32
    }
  }
}
