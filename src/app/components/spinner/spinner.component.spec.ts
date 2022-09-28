import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QzSpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: QzSpinnerComponent;
  let fixture: ComponentFixture<QzSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QzSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QzSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
