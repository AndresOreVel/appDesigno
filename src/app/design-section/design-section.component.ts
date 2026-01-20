import { Component, Input } from '@angular/core';
import { DesignItem } from '../models/design';
import { CommonModule } from '@angular/common';
import { TouchComponent } from "../touch/touch.component";

@Component({
  selector: 'app-design-section',
  standalone: true,
  imports: [CommonModule, TouchComponent],
  templateUrl: './design-section.component.html',
  styleUrl: './design-section.component.scss'
})
export class DesignSectionComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() items: DesignItem[] = [];
}
