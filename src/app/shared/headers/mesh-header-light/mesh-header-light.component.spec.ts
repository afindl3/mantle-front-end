import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshHeaderLightComponent } from './mesh-header-light.component';

describe('MeshHeaderComponent', () => {
  let component: MeshHeaderLightComponent;
  let fixture: ComponentFixture<MeshHeaderLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeshHeaderLightComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshHeaderLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
