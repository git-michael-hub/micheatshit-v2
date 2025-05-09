import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInputVariableComponent } from './template-input-variable.component';

describe('TemplateInputVariableComponent', () => {
  let component: TemplateInputVariableComponent;
  let fixture: ComponentFixture<TemplateInputVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateInputVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateInputVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
