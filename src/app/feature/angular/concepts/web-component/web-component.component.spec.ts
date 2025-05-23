import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentComponent } from './web-component.component';

describe('WebComponentComponent', () => {
  let component: WebComponentComponent;
  let fixture: ComponentFixture<WebComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WebComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
