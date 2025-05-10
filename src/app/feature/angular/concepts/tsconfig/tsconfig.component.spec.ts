import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TsconfigComponent } from './tsconfig.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TsconfigComponent', () => {
  let component: TsconfigComponent;
  let fixture: ComponentFixture<TsconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TsconfigComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
