import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggeredColumnsComponent } from './staggered-columns.component';

describe('StaggeredColumnsComponent', () => {
  let component: StaggeredColumnsComponent;
  let fixture: ComponentFixture<StaggeredColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaggeredColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggeredColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
