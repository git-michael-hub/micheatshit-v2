import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidirectionalDataFlowComponent } from './unidirectional-data-flow.component';

describe('UnidirectionalDataFlowComponent', () => {
  let component: UnidirectionalDataFlowComponent;
  let fixture: ComponentFixture<UnidirectionalDataFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidirectionalDataFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidirectionalDataFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
