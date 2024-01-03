import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFeaturesComponent } from './weather-features.component';

describe('WeatherFeaturesComponent', () => {
  let component: WeatherFeaturesComponent;
  let fixture: ComponentFixture<WeatherFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherFeaturesComponent]
    });
    fixture = TestBed.createComponent(WeatherFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
