import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselSliderComponent } from './carusel-slider.component';

describe('CaruselSliderComponent', () => {
  let component: CaruselSliderComponent;
  let fixture: ComponentFixture<CaruselSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaruselSliderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
