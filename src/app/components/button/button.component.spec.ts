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
    const classBaseButtonBase =
      'px-5 py-2 rounded cursor-pointer disabled:opacity-40 disabled:bg-gray-400 disabled:text-gray-900 disabled:cursor-not-allowed';

    it('should get class of primary', () => {
      component.btnType = 'primary';

      expect(component.classes).toEqual(
        `${classBaseButtonBase} ${component.generateBackgroundColor(
          component.btnType
        )}`
      );
    });

    it('should get class of secondary', () => {
      component.btnType = 'secondary';

      expect(component.classes).toEqual(
        `${classBaseButtonBase} ${component.generateBackgroundColor(
          component.btnType
        )}`
      );
    });
  });
});
