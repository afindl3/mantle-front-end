import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperProgramComponent } from './developer-program.component';

describe('DeveloperProgramComponent', () => {
  let component: DeveloperProgramComponent;
  let fixture: ComponentFixture<DeveloperProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
