import { Component, Input } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'lbk-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() car!: Car;
}
