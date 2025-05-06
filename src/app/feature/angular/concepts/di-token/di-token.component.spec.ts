import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiTokenComponent } from './di-token.component';

describe('DiTokenComponent', () => {
  let component: DiTokenComponent;
  let fixture: ComponentFixture<DiTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
