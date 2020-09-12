import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImgHeaderComponent } from './multi-img-header.component';

describe('MultiImgHeaderComponent', () => {
  let component: MultiImgHeaderComponent;
  let fixture: ComponentFixture<MultiImgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiImgHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiImgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
