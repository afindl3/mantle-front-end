import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProvenanceComponent } from './data-provenance.component';

describe('DataProvenanceComponent', () => {
  let component: DataProvenanceComponent;
  let fixture: ComponentFixture<DataProvenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProvenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProvenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
