import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalMaintanenceComponent } from './seasonal-maintanence.component';

describe('SeasonalMaintanenceComponent', () => {
  let component: SeasonalMaintanenceComponent;
  let fixture: ComponentFixture<SeasonalMaintanenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonalMaintanenceComponent]
    });
    fixture = TestBed.createComponent(SeasonalMaintanenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
