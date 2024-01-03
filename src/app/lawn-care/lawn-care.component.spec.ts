import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnCareComponent } from './lawn-care.component';

describe('LawnCareComponent', () => {
  let component: LawnCareComponent;
  let fixture: ComponentFixture<LawnCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawnCareComponent]
    });
    fixture = TestBed.createComponent(LawnCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
