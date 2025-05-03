/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularElementComponent } from './angular-element.component';

describe('AngularElementComponent', () => {
  let component: AngularElementComponent;
  let fixture: ComponentFixture<AngularElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
