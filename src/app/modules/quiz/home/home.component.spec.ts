import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '@components/components.module';
import { QuizHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: QuizHomeComponent;
  let fixture: ComponentFixture<QuizHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizHomeComponent],
      imports: [ComponentsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
