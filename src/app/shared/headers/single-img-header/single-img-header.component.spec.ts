import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImgHeaderComponent } from './single-img-header.component';

describe('SingleImgHeaderComponent', () => {
  let component: SingleImgHeaderComponent;
  let fixture: ComponentFixture<SingleImgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleImgHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
