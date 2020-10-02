import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedNetworksComponent } from './supported-networks.component';

describe('SupportedNetworksComponent', () => {
  let component: SupportedNetworksComponent;
  let fixture: ComponentFixture<SupportedNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportedNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
