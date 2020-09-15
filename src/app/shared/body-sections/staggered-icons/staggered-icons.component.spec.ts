import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggeredIconsComponent } from './staggered-icons.component';

describe('StaggeredIconsComponent', () => {
  let component: StaggeredIconsComponent;
  let fixture: ComponentFixture<StaggeredIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaggeredIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggeredIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
