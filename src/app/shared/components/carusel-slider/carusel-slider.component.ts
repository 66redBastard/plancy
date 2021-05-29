import { Component, OnInit } from '@angular/core';
import { SliderOptionsService } from 'app/shared/services/slider-options.service';
import { Slider } from 'app/shared/models/slider';

@Component({
  selector: 'app-carusel-slider',
  templateUrl: './carusel-slider.component.html',
  styleUrls: ['./carusel-slider.component.scss'],
})
export class CaruselSliderComponent implements OnInit {
  products: Slider[];

  responsiveOptions: {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }[];

  constructor(private productService: SliderOptionsService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
  }
}
