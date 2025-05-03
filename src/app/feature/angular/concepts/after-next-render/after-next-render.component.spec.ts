import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfterNextRenderComponent } from './after-next-render.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AfterNextRenderComponent', () => {
  let component: AfterNextRenderComponent;
  let fixture: ComponentFixture<AfterNextRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterNextRenderComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterNextRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
