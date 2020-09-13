import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSectionComponent } from './case-section.component';

describe('CaseSectionComponent', () => {
  let component: CaseSectionComponent;
  let fixture: ComponentFixture<CaseSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
