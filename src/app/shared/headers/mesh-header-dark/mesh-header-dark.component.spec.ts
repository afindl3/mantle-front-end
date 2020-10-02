import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshHeaderDarkComponent } from './mesh-header-dark.component';

describe('MeshHeaderDarkComponent', () => {
  let component: MeshHeaderDarkComponent;
  let fixture: ComponentFixture<MeshHeaderDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeshHeaderDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshHeaderDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
