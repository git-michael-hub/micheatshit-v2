import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranspileComponent } from './transpile.component';

describe('TranspileComponent', () => {
  let component: TranspileComponent;
  let fixture: ComponentFixture<TranspileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranspileComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TranspileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
