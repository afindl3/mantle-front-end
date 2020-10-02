import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitSubheaderComponent } from './split-subheader.component';

describe('SplitSubheaderComponent', () => {
  let component: SplitSubheaderComponent;
  let fixture: ComponentFixture<SplitSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
