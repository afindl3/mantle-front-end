import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatMakesUsDifferentComponent } from './what-makes-us-different.component';

describe('WhatMakesUsDifferentComponent', () => {
  let component: WhatMakesUsDifferentComponent;
  let fixture: ComponentFixture<WhatMakesUsDifferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatMakesUsDifferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatMakesUsDifferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
