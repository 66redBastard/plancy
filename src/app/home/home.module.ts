import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SubmitFormComponent } from '@shared/components/submit-form/submit-form.component';

import { CaruselSliderComponent } from 'app/shared/components/carusel-slider/carusel-slider.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SubmitFormComponent,
    CaruselSliderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
  ],
})
export class HomeModule {}
