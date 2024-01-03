import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationSystemsComponent } from './irrigation-systems.component';

describe('IrrigationSystemsComponent', () => {
  let component: IrrigationSystemsComponent;
  let fixture: ComponentFixture<IrrigationSystemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrrigationSystemsComponent]
    });
    fixture = TestBed.createComponent(IrrigationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
