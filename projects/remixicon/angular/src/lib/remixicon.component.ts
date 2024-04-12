import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'remixicon',
  standalone: true,
  imports: [NgClass, NgStyle],
  template: `
    <i [ngClass]="iconName" [ngStyle]="{ 'font-size': size, 'color': color }"></i>
  `,
})
export class Remixicons {
  @Input({ required: true })
  iconName!: string;
  @Input()
  size!: string;
  @Input()
  color!: string;
}
