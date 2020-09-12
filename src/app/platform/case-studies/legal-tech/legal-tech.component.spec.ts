import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTechComponent } from './legal-tech.component';

describe('LegalTechComponent', () => {
  let component: LegalTechComponent;
  let fixture: ComponentFixture<LegalTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
