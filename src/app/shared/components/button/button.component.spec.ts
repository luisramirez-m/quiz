import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QzButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: QzButtonComponent;
  let fixture: ComponentFixture<QzButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QzButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('classes()', () => {
    it('should get class of primary', () => {
      component.btnType = 'primary';

      expect(component.classes).toEqual(
        `px-5 py-2 rounded ${component.generateBackgroundColor(
          component.btnType
        )}`
      );
    });

    it('should get class of secondary', () => {
      component.btnType = 'secondary';

      expect(component.classes).toEqual(
        `px-5 py-2 rounded ${component.generateBackgroundColor(
          component.btnType
        )}`
      );
    });
  });
});
