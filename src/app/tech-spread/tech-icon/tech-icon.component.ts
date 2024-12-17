import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, output } from '@angular/core';
import { vec2 } from '../../../utils/vec2';

export type techIcon = {
  name: string;
  link: string;
  position: vec2;
};

@Component({
  selector: 'tech-icon',
  imports: [],
  templateUrl: './tech-icon.component.html',
  styleUrl: './tech-icon.component.css',
  animations: [
    trigger('setSelect', [
      state(
        'not-selected',
        style({
          opacity: '50%'
        })
      ),
      state(
        'selected',
        style({
          opacity: '100%'
        })
      ),
      state(
        'not-filtering',
        style({
          opacity: '100%'
        })
      ),
      transition('not-selected => selected', [animate('0.1s')]),
      transition('selected => not-selected', [animate('0.1s')])
    ])
  ]
})
export class TechIconComponent {
  @Input() name: string = "";
  @Input() link: string = "";
  @Input() position: vec2 = {x: 0, y: 0};
  @Input() isFiltering: boolean = false;

  isSelected: boolean = false;
  iconToggled = output<{
    name: string,
    isSelected: boolean
  }>();

  onClick() {
    this.isSelected = !this.isSelected;
    this.iconToggled.emit({
      name: this.name,
      isSelected: this.isSelected
    });
  }

  setState() {
    if (!this.isFiltering) {
      return 'not-filtering';
    } else {
      return this.isSelected
      ? 'selected'
      : 'not-selected'
    }
  }
}

