import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavExtendedComponent } from './nav-extended.component';

describe('NavExtendedComponent', () => {
  let component: NavExtendedComponent;
  let fixture: ComponentFixture<NavExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
