import { Component } from '@angular/core';
import { Car } from './car-card/car.model';

@Component({
  selector: 'lbk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cars: Car[] = [
    {
      src: '/assets/images/icon-sedans.svg',
      name: 'Sedans',
      background: 'bg-sedans',
      textColor: 'text-sedans',
      comment:
        'Choose a sedan for its affordability and excellent fuel economy. Ideal for a crusing in the city or an your next road trip.',
    },
    {
      src: '/assets/images/icon-suvs.svg',
      name: 'Suvs',
      background: 'bg-suvs',
      textColor: 'text-suvs',
      comment:
        'Take an SUV for its spacious iterior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    },
    {
      src: '/assets/images/icon-luxury.svg',
      name: 'Luxury',
      background: 'bg-luxury',
      textColor: 'text-luxury',
      comment:
        'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style',
    },
  ];
}
