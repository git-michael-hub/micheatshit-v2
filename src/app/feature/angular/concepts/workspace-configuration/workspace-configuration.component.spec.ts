import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceConfigurationComponent } from './workspace-configuration.component';

describe('WorkspaceConfigurationComponent', () => {
  let component: WorkspaceConfigurationComponent;
  let fixture: ComponentFixture<WorkspaceConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
