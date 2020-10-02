import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTechComponent } from './clean-tech.component';

describe('CleanTechComponent', () => {
  let component: CleanTechComponent;
  let fixture: ComponentFixture<CleanTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
