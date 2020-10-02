import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerProgramComponent } from './partner-program.component';

describe('PartnerProgramComponent', () => {
  let component: PartnerProgramComponent;
  let fixture: ComponentFixture<PartnerProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
