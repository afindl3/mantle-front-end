import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossCloudStorageComponent } from './cross-cloud-storage.component';

describe('CrossCloudStorageComponent', () => {
  let component: CrossCloudStorageComponent;
  let fixture: ComponentFixture<CrossCloudStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossCloudStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossCloudStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
