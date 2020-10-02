import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsMantleComponent } from './what-is-mantle.component';

describe('WhatIsMantleComponent', () => {
  let component: WhatIsMantleComponent;
  let fixture: ComponentFixture<WhatIsMantleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsMantleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsMantleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
