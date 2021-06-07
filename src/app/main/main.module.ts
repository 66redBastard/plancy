import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';

import { MainPageComponent } from './main-page/main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { SubmitFormComponent } from '@shared/components/submit-form/submit-form.component';

import { CaruselSliderComponent } from 'app/shared/components/carusel-slider/carusel-slider.component';

import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SubmitFormComponent,
    CaruselSliderComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
  ],
})
export class MainModule {}
