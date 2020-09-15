import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedCompaniesComponent } from './trusted-companies.component';

describe('TrustedCompaniesComponent', () => {
  let component: TrustedCompaniesComponent;
  let fixture: ComponentFixture<TrustedCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustedCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
