import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementValidationComponent } from './agreement-validation.component';

describe('AgreementValidationComponent', () => {
  let component: AgreementValidationComponent;
  let fixture: ComponentFixture<AgreementValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
