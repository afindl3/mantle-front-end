import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributedIdentityComponent } from './distributed-identity.component';

describe('DistributedIdentityComponent', () => {
  let component: DistributedIdentityComponent;
  let fixture: ComponentFixture<DistributedIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributedIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributedIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
